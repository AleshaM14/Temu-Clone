import express from "express";
import {
  loginUser,
  logout,
  getProfile,
  registerUser,
} from "../controllers/authController.js"; //Imported functions from authController.js → handle actual logic for login, registration, logout, and getting profile.

import { protect } from "../middleware/authMiddleware.js";  //Imported protect middleware to secure routes that need authentication.

const router = express.Router();

router.post("/login", loginUser); //User submits email & password. Calls loginUser controller.
router.post("/register", registerUser); //User submits registration form. Calls registerUser controller.
router.get("/logout",protect,  logout); //User clicks logout. Calls logout controller.
router.get("/getprofile", protect, getProfile); //Frontend calls this to get logged-in user’s info. Calls getProfile controller.

export default router;
