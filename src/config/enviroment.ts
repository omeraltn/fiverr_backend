import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const config = {
  //enviroment
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV as "development" | "production",
  CLIENT_URL: process.env.CLIENT_URL as string,

  // db
  MONGO_URI: process.env.MONGO_URI as string,
};

export const isDevelopment = config.NODE_ENV === "development";
export const isProduction = config.NODE_ENV === "production";
