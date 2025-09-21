import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "mysecret"; //secret key used to sign/verify JWTs.

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader); //Looks for the Authorization header in the incoming request.

  if (authHeader || authHeader.startsWith("Bearer ")) {
    //Checks if the header exists and starts with "Bearer ".
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; //Extracts the token part after "Bearer ".

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; //Attaches the decoded user info (id, name, email) to req.user for use in later middleware/routes.
    next(); //Calls next() to pass control to the next middleware or route handler.
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
