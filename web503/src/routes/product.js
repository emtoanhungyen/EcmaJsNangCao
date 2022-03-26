import { Router } from "express";
import {
    create, get, list, remove, update,
} from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, requireSigin } from "../middlewares/checkAuth";

const router = Router();

router.get("/products", checkAuth, list);
router.post("/products/:useId", requireSigin, isAuth, checkAuth, create);
router.get("/products/:id", checkAuth, get);
router.delete("/products/:id", checkAuth, remove);
router.put("/products/:id", checkAuth, update);

router.param("useId", userById);
export default router;