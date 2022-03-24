import { Router } from "express";
import { signup, signin, listUser } from "../controllers/auth";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/listUser", listUser);

export default router;