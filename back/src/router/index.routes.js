import { Router } from "express";
import getAll from "../controllers/article.js";

const router = Router();

router.get("/article", getAll);

export default router;
