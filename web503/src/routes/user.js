import { Router } from "express";
import { signup, listUser, removeUser } from "../controllers/auth";

const router = Router();

router.post("/signup", signup);
// router.post("/login", login);
router.get("/listUser", listUser);
router.delete("/listUser/:id", removeUser);

export default router;