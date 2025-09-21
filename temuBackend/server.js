import express from "express"; //Core of your backend server. Handles routing, middleware, requests, responses.
import cors from "cors"; //Stands for Cross-Origin Resource Sharing.Without this, if your frontend (React) runs on a different port(like 3000), it won’t be able to talk to your backend (5000).
import dotenv from "dotenv"; //Loads environment variables from a .env file (like database URLs or secret keys)
import authRoutes from "./routes/authRoutes.js"; //Handles user-related routes like (login, register, logout, profile).
import connectDB from "./config/db.js"; //connects to MongoDB database.
// import session from "express-session"; //manages user sessions (keeps users logged in across requests).
import prodRoutes from "./routes/productRoute.js"; //all routes about products (fetch products, add product, update product).

dotenv.config(); // Load environment variables from .env file
connectDB(); //Connects your server to MongoDB database.

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, origin); // allow all origins
    },
    credentials: true,
  })
);

app.use(express.json()); //Lets your server read JSON data sent from the frontend.

// app.use(
//   session({
//     secret: "first_session",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false, httpOnly: true },
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Lets your server read form data

app.use("/auth", authRoutes);
app.use("/prod", prodRoutes);
app.use("/hello", (req, res) => {
  res.send("Hello World from /hello route!");
});

const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});
