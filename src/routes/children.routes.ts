import { Router } from "express";
import { ChildrenController } from "../controllers/children.controller";

const router = Router();

router.get("/", ChildrenController.getAll);
router.post("/", ChildrenController.add);
router.put("/:id", ChildrenController.update);
router.delete("/:id", ChildrenController.delete);
router.post("/reorder", ChildrenController.reorder);

export default router;
