import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  physicalGameReg,
  refreshAccessToken
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/physicalgamereg").post(physicalGameReg);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/referesh-token").post(refreshAccessToken)

export default router;
