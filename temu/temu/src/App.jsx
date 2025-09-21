import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/authProvider";
import OrdersPage from "./components/pages/UserDashboard/orderPage";
import UserDashboard from "./components/pages/UserDashboard/userDashboard";
import ProfilePage from "./components/pages/UserDashboard/profilePage";

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

          {/* User Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<UserDashboard />}>
              <Route path="profile" element={<ProfilePage />} />{" "}
              {/* /dashboard/profile → Profile*/}
              <Route path="orders" element={<OrdersPage />} />{" "}
              {/*/dashboard/orders → Orders*/}
            </Route>
          </Route>

          {/* Admin Dashboard Routes */}
          <Route element={<ProtectedRoute admin={true} />}>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="users" element={<AdminUsers />} />{" "}
              {/*/admin/users → Manage all users*/}
              <Route path="products" element={<AdminProducts />} />{" "}
              {/*/admin/products → Manage all products*/}
              <Route path="orders" element={<AdminOrders />} />
              {/*/admin/orders → View all orders*/}
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
