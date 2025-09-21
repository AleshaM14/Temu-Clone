export const adminOnly = (req, res, next) => {
  // req.user comes from the protect middleware (after JWT verification)
  if (req.user && req.user.role === "admin") {
    next(); // user is admin → continue
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};
