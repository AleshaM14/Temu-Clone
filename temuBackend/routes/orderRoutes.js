import express from "express";
import { getUserOrders } from "../controllers/orderController.js"; //This is the controller function that fetches orders from the database.
import { protect } from "../middleware/authMiddleware.js"; //Middleware to check JWT token and ensure the user is logged in.

const router = express.Router();

router.get("/user", protect, getUserOrders);

export default router;


/*summary:
router.get("/user", protect, getUserOrders) =>
HTTP GET request at /orders/user.
First runs protect middleware → checks token.
Then runs getUserOrders → sends user’s orders.
*/