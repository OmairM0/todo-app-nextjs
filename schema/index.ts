import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters long",
    })
    .max(30, {
      message: "Title must be at most 30 characters long",
    }),
  body: z
    .string()
    .max(80, {
      message: "Description must be at most 80 characters long",
    })
    .optional(),

  completed: z.boolean(),
});
