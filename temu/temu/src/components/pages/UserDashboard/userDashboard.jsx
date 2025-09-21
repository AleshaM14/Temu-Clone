import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside
        style={{
          width: "200px",
          padding: "20px",
          borderRight: "1px solid gray",
        }}
      >
        <h2>User Dashboard</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="profile">Profile</Link>{" "}
              {/* React Router link, changes the page without reloading */}
            </li>
            <li>
              <Link to="orders">Orders</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />{" "}
        {/* outlet :This renders the sub-routes like ProfilePage or OrdersPage */}
      </main>
    </div>
  );
};

export default UserDashboard;

{
  /* Main Purpose:The UserDashboard component is used to create a dashboard for the user, where a user can:
1. View their Profile
2.View their Orders

Layout:
Sidebar on the left → navigation links (Profile, Orders)
Main content on the right → shows the currently selected page */
}
