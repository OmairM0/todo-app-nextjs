"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllTodos = async (user_id: string) => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      user_id,
    },
  });
};

export const createTodo = async (todo: {
  title: string;
  body?: string | undefined;
  completed: boolean;
  user_id: string;
}) => {
  await prisma.todo.create({
    data: todo,
  });

  revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};

export const updateTodo = async ({ id, title, body, completed }: ITodo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });

  revalidatePath("/");
};
