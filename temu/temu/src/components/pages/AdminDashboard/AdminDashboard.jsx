import React from "react";

import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="users">User Management</Link>
          </li>
          <li>
            <Link to="products">Product Management</Link>
          </li>
          <li>
            <Link to="orders">All Orders</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* <Outlet /> renders the selected sub-page */}
    </div>
  );
};

export default AdminDashboard;
