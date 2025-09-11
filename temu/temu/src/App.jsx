import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/authProvider";

function App() {
  //  Global cart state
  const [CartItems, setCartItems] = useState([]);

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage cartItems={CartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage cartItems={CartItems} setCartItems={setCartItems} />
            }
          />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={<div>Dashboard - Protected</div>}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
