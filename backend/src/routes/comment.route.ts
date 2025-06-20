import { Router } from "express";

const commentRoutes = Router();

// Placeholder for comment routes
commentRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "Comment routes placeholder",
    comments: []
  });
});

export default commentRoutes;