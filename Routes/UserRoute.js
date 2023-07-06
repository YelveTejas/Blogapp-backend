import express, { json } from "express";
import dotenv from "dotenv";
import upload from "../utilis/upload.js";
import { uploadImage } from "../controller/Post/image.controller.js";
import { getImage } from "../controller/Post/getimage.controller.js";
import { createpost } from "../controller/Post/create.controller.js";
import { authenticate } from "../Middleware/Authenticate.js";
import { login, signup } from "../controller/user/signup.controller.js";
import { getposts } from "../controller/Post/getposts.controller.js";
import { getpostbyId } from "../controller/Post/getpostbyid.controller.js";
import { deletePost } from "../controller/Post/deletepost.controller.js";
import { comment } from "../controller/Commets/Comment.controller.js";
import { GetAllComments } from "../controller/Commets/Getcomments.controller.js";
import { Deletecomment } from "../controller/Commets/Commentdelete.controller.js";
import { updatePost } from "../controller/Post/updatepost.controller.js";

dotenv.config();

const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);
router.post("/create", authenticate, createpost);
router.get("/getpost", authenticate,getposts)
router.get("/details/:id",authenticate,getpostbyId)
router.put("/update/:id",updatePost)
router.delete("/delete/:id",authenticate,deletePost)
router.post("/comment",authenticate,comment)
router.get("/comment/:id",authenticate,GetAllComments)
router.delete("/deletecomment/:id",authenticate,Deletecomment)
export default router;
