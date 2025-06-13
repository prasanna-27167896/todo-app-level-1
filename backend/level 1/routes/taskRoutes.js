import express from "express";

import {
  getTasks,
  newTask,
  updatedTask,
  deletedTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/task", newTask);
router.get("/tasks", getTasks);
router.put("/task/:id", updatedTask);
router.delete("/task/:id", deletedTask);

export default router;
