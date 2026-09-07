import express from "express";
import { signup, login, logout, googleAuth, checkAuth } from "../../controllers/auth/user.controller.js";
import { authUser } from "../../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/google", googleAuth);
authRouter.get("/check", authUser, checkAuth);

export default authRouter;