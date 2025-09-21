import { User } from "../models/model.js";
import { comparePassword, hashPassword } from "../utils/hashPaswword.js";
import { generateToken } from "../utils/jwt.js";

/*User Registration (/auth/register):
[Frontend: React Form] 
      │  sends username, email, password, fullname, DOB, contact
      ▼
[Express Route: /auth/register]
      │
      ▼
[Controller: registerUser]
      │
      ├─> Check if user exists in MongoDB
      │
      ├─> If new user:
      │      ├─ Hash password (bcrypt)
      │      ├─ Save user to DB (User model)
      │      └─ Start session (req.session.user = {...})
      │
      ▼
[Response: JSON]
   { message: "User registered successfully", user: {...} } */

const registerUser = async (req, res) => {
  const { username, email, password, fullname, contact, DOB, address } =
    req.body;
  console.log(req.body);
  try {
    const UserExist = await User.findOne({ email }); //Queries MongoDB to see if a user with this email already exists.
    if (UserExist)
      return res.status(200).json({ message: "User already exists" });

    const hash = await hashPassword(password); //A utility function that converts the plain text password into a secure hashed string.
    //await → Waits for the hashing to finish before moving on.

    //Create a New User in MongoDB
    const newUser = await User.create({
      //Uses your Mongoose User model to insert a new document into the users collection.
      username,
      email,
      password: hash,
      fullname,
      contact,
      DOB,
      address,
      role: "user", // Default role is 'user'
    });

    // req.session.user = { id: newUser._id, name: newUser.fullname };
    //note : The server remembers the user using a session. The browser gets a cookie to identify the user.This way, the user stays logged in while using the app.

    const token = generateToken(newUser);
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, name: newUser.fullname, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/*User Login (/auth/login):
[Frontend: Login Form]
      │  sends email + password
      ▼
[Express Route: /auth/login]
      │
      ▼
[Controller: loginUser]
      │
      ├─> Find user by email in MongoDB
      ├─> Compare entered password with stored hashed password
      ├─> If valid:
      │      ├─ Generate JWT token (contains user id, name, email, expiry)
      │      └─ Return success JSON with token and user info
      │
      ▼
[Response: JSON]
   { message: "Login successful", token: "...", user: {...} } */

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; //Takes the email and password that the user typed in the login form.
    const user = await User.findOne({ email }); //Looks for a user with that email in MongoDB.

    if (user && (await comparePassword(password, user.password))) {
      // Generate JWT
      const token = generateToken(user); //Creates a JWT that contains the user's id/name/email and an expiry time.

      res.json({
        message: "Login successful",
        token, //Sends token to frontend for future requests.
        user: { id: user._id, name: user.fullname, email: user.email },
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/*Logout (/auth/logout)
[Frontend: Clicks Logout]
      │
      ▼
[Express Route: /auth/logout]
      │
      ▼
[Controller: logout]
      │
      ├─> Destroy session
      ▼
[Response: JSON]
   { message: "Logout successful" }
 */

// const logout = (req, res) => {
//   try {
//     req.session.destroy(() => {
//       //Deletes the current user’s session on the server.
//       res.json({ message: "Logout successful" });
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const logout = (req, res) => {
  res.json({ message: "Logout successful. Please clear token on client." });
};

/*Get Profile (/auth/getprofile):
[Frontend: React App]
      │ calls /auth/getprofile with session cookie
      ▼
[Express Route: /auth/getprofile]
      │
      ▼
[Controller: getProfile]
      │
      ├─> If session exists → return user info
      └─> Else return Unauthorized
      ▼
[Response: JSON]
   { user: { id, name } } OR { message: "Unauthorized" }
 */

const getProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.json({ user: req.user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/*summary of get profile: It checks if the user is logged in by looking at the session; if yes, it returns their info, and if not, it returns “Unauthorized.” */

export { registerUser, loginUser, logout, getProfile };
