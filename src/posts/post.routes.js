import { Router } from "express";

import { getPosts, post, updatePost, commentpost, getByCourse} from "./post.controller.js";
import { postValidator, updatePostValidator, commentValidator } from "../middlewares/post-validators.js";

import { uploadPicture } from "../middlewares/multer-uploads.js";
import { cloudinaryUploadMiddleware } from "../middlewares/img-uploads.js";

const router = Router();

router.get("/", getPosts);
router.post("/post", uploadPicture.single("img"), cloudinaryUploadMiddleware("img"), postValidator, post);
router.put("/update/:id", updatePostValidator, updatePost);
router.put("/comment/:id", commentValidator, commentpost);
router.get("/course/:course", getByCourse);

export default router;