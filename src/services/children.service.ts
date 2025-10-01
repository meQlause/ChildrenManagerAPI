import { Child } from "../models/child.model";

let children: Child[] = [];

const generateId = () => Math.random().toString(36).substring(2, 9);

export const ChildrenService = {
    getAll: (): Child[] => children,

    add: (name: string, age: number): Child => {
        const newChild: Child = { id: generateId(), name, age };
        children.push(newChild);
        return newChild;
    },

    update: (id: string, name: string, age: number): Child | null => {
        const index = children.findIndex((c) => c.id === id);
        if (index === -1) return null;

        const updatedChild: Child = { id, name, age };
        children[index] = updatedChild;

        return updatedChild;
    },

    delete: (id: string): Child | null => {
        const index = children.findIndex((c) => c.id === id);
        if (index === -1) return null;

        const [deleted] = children.splice(index, 1);
        return deleted ?? null;
    },


    reorder: (order: string[]): Child[] => {
        const reordered: Child[] = [];
        order.forEach((id) => {
            const child = children.find((c) => c.id === id);
            if (child) reordered.push(child);
        });
        children = reordered;
        return children;
    },
};
