import jwt from "jsonwebtoken"; // Loads the jsonwebtoken library that creates and validates JWTs.

const SECRET_KEY = process.env.JWT_SECRET || "mysecret"; // keep in .env in real apps (SECRET_KEY is the secret used to sign and verify tokens.)

//creat token
export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.fullname, email: user.email }, // Payload: small JSON object put inside the token:id,name,email. 

    SECRET_KEY, // secret key to sign the token
    { expiresIn: "1h" } // token valid for 1 hour
  );
};

// verify token middleware
export const verfyToken = (token) =>{
  return jwt.verify(token, SECRET_KEY);
};


/*summary:

This file has two helpers:

generateToken(user) → creates (signs) a JWT that contains the user's id/name/email and an expiry time. You send that token to the client after login.

verifyToken(token) → checks the token using your secret and returns the decoded payload if it’s valid, or throws an error if it’s not (expired/invalid). */