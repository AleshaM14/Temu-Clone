import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    images: [String], // Supports multiple images per product.
    brand: String,
    category: String,
    rating: Number,
    stock: Number,
  },
  { timestamps: true } //Automatically adds createdAt and updatedAt fields.
);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    DOB: { type: String, required: true },
    contact: {
      type: String,
      match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],
    },
    address: [
      {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
        isDefault: { type: Boolean, default: false }, // Marks the default address.
      },
    ],
    role: { type: String, enum: ["user", "admin"], default: "user" }, //Role-based access control.
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema); //Creates a MongoDB collection named products (Mongoose pluralizes automatically).
const User = mongoose.model("User", userSchema); //Creates a users collection.

export { Product, User };

/*
How This Fits in Your Backend:
Registration/Login → Uses User model to create/find users.
Product CRUD → Uses Product model to add, update, delete, or fetch products.
 */
