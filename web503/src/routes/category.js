import { Router } from "express";
import { create, list, read } from "../controllers/category";

const router = Router();

router.post("/category", create);
router.get("/category/list", list);
router.get("/category/:id", read);

export default router;