import { Request, Response } from "express";
import { ChildrenService } from "../services/children.service";

export const ChildrenController = {
    getAll: (req: Request, res: Response) => {
        console.log("[ChildrenController] GET all children");

        const result = ChildrenService.getAll();

        console.log(`[ChildrenController] Found ${result.length} children`);
        res.json(result);
    },

    add: (req: Request, res: Response) => {
        console.log("[ChildrenController] ADD request body:", req.body);

        const { name, age } = req.body;
        if (!name || !age) {
            console.warn("[ChildrenController] Missing name or age");
            return res.status(400).json({ error: "Name and age are required" });
        }

        const newChild = ChildrenService.add(name, age);
        console.log(`[ChildrenController] Added child with id=${newChild.id}`);

        res.status(201).json(newChild);
    },

    update: (req: Request, res: Response) => {
        console.log("[ChildrenController] UPDATE request params:", req.params, "body:", req.body);

        const { id } = req.params;
        if (!id) {
            console.warn("[ChildrenController] No child ID provided");
            return res.status(400).json({ error: "Child ID is required" });
        }

        const { name, age } = req.body;
        if (!name || typeof age !== "number") {
            console.warn("[ChildrenController] Invalid input for update");
            return res.status(400).json({ error: "Name and age are required" });
        }

        const updated = ChildrenService.update(id, name, age);
        if (!updated) {
            console.warn(`[ChildrenController] Child with id=${id} not found`);
            return res.status(404).json({ error: "Child not found" });
        }

        console.log(`[ChildrenController] Updated child with id=${id}`);
        return res.json(updated);
    },

    delete: (req: Request, res: Response) => {
        console.log("[ChildrenController] DELETE request params:", req.params);

        const { id } = req.params;
        if (!id) {
            console.warn("[ChildrenController] No child ID provided");
            return res.status(400).json({ error: "Child ID is required" });
        }

        const deleted = ChildrenService.delete(id);
        if (!deleted) {
            console.warn(`[ChildrenController] Child with id=${id} not found`);
            return res.status(404).json({ error: "Child not found" });
        }

        console.log(`[ChildrenController] Deleted child with id=${id}`);
        return res.json(deleted);
    },

    reorder: (req: Request, res: Response) => {
        console.log("[ChildrenController] REORDER request body:", req.body);

        const { order } = req.body;
        if (!Array.isArray(order)) {
            console.warn("[ChildrenController] Invalid order array");
            return res.status(400).json({ error: "Order must be an array of IDs" });
        }

        const result = ChildrenService.reorder(order);
        console.log("[ChildrenController] Reordered children");

        res.json(result);
    },
};
