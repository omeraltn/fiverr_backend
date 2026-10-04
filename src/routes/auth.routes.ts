import express from "express";
import { authLimiter, globalLimiter } from "../utils/rateLimit.js";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";

// router oluşturma
const router = express.Router();

//endpoimntleri belirle
router.route("/register").post(authLimiter, register);
router.route("/login").post(authLimiter, login);
router.route("/logout").post(authLimiter, logout);
router.route("/profile").get(globalLimiter, profile);

export default router;
