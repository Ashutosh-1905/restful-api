const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Authentication error:", err.message);
    res
      .status(401)
      .json({
        success: false,
        message: "Invalid or expired token. Please log in again.",
      });
  }
};
