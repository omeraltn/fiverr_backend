import express from "express";
import {
  getAll,
  getOne,
  create,
  deleteOne,
} from "../controllers/gig.controller.js";
import protect from "../middlewares/protect.js";

// router oluşturma
const router = express.Router();

//endpoimntleri belirle
router.route("/").get(getAll).post(protect, create);
router.route("/:id").get(getOne).delete(protect, deleteOne);

export default router;
