import React, { useEffect, useState } from "react";
import axios from "axios"; //axios → library to make HTTP requests to backend.

const ProfilePage = () => {
  const [user, setUser] = useState(null); //user → stores the profile info we get from backend.
  const token = localStorage.getItem("token"); // token → JWT token saved in browser after login; needed to authenticate the request.

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/getprofile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []); //[] (empty array) means → run this code only once (when page first opens).

  if (!user) return <p>Loading...</p>; //If user info not yet loaded, show Loading... message.

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;

/*summary:
Page opens → useEffect runs.
Calls backend → “Hey, give me the user profile, here’s my token.”
If backend accepts → we store that user info in state.
If something’s wrong → error is logged.   */
