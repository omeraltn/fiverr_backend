import express from "express";
import {
  getAll,
  getOne,
  create,
  deleteOne,
} from "../controllers/gig.controller.js";
import protect from "../middlewares/protect.js";
import upload from "../utils/multer.js";

// router oluşturma
const router = express.Router();

//endpoimntleri belirle
router
  .route("/")
  .get(getAll)
  .post(
    protect,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "images", maxCount: 6 },
    ]),
    create,
  );
router.route("/:id").get(getOne).delete(protect, deleteOne);

export default router;
