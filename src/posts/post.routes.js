import { Router } from "express";

import { getPosts, post, updatePost, commentpost} from "./post.controller.js";
import { postValidator, updatePostValidator, commentValidator } from "../middlewares/post-validators.js";

const router = Router();

router.get("/", getPosts);
router.post("/post", postValidator, post);
router.put("/comment:id", updatePostValidator, updatePost);