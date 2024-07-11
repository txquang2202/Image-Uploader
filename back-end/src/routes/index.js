import express from "express";
import { getImages, postImages } from "../controller/image.js";
import { getComments, postComments } from "../controller/comments.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/api/add-images", upload.single("image"), postImages);
router.get("/api/images", getImages);
router.post("/api/images/:id/comment", postComments);
router.get("/api/images/:id/comment", getComments);

export default router;
