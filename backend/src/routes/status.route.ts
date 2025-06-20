import { Router } from "express";

const statusRoutes = Router();

// Health check endpoint
statusRoutes.get("/health", (req, res) => {
  res.status(200).json({
    message: "Server is running",
    timestamp: new Date().toISOString(),
    status: "healthy"
  });
});

export default statusRoutes;