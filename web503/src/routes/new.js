import { Router } from "express";
import { postNews } from "../controllers/new";

const router = Router();

router.post("/post", postNews);

export default router;