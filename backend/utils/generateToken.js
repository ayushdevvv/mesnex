import jwt from "jsonwebtoken";

export function generateTokenAndSetCookie(userId, res) {
  const isProduction = process.env.NODE_ENV === "production";

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" });

  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });

  return token;
}