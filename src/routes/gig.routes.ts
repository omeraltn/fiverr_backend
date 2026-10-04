import express from "express";
import {
  getAll,
  getOne,
  create,
  deleteOne,
} from "../controllers/gig.controller.js";

// router oluşturma
const router = express.Router();

//endpoimntleri belirle
router.route("/").get(getAll).post(create);
router.route("/:id").get(getOne).delete(deleteOne);

export default router;
