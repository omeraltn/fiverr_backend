import mongoose from "mongoose";
import { config } from "./config/enviroment.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import gigRoutes from "./routes/gig.routes.js";
import { NotFound } from "./utils/error.js";
import errorHandler from "./middlewares/errorHandle.js";
import { globalLimiter } from "./utils/rateLimit.js";

// veritabanına bağlan
mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log("⚪️ MongoDB'ye bağlandı"))
  .catch(() => console.log("🔴 MongoDB'ye Bağlanamadı."));

// express uygulaması oluştur
const app = express();

//midlleware'leri tanımla
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

//routeları tanımla
app.use("/api/health", (req, res) =>
  res.json({
    message: "Backend sağlıklı bir şekilde çalışıyor.",
    date: new Date().toLocaleString(),
  }),
);
app.use("/api/auth", authRoutes);
app.use("/api/gigs", globalLimiter, gigRoutes);

// 404 route
app.use((req, res, next) => next(new NotFound()));

// global error mu
app.use(errorHandler);

// api'ın çalışacağı port
app.listen(config.PORT, () =>
  console.log(`🚨Server ${config.PORT} portunu dinlemeye başladı.🚨`),
);
