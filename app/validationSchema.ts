import { z } from 'zod';

export const createtaskSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1),
    dueDate: z.string()
});