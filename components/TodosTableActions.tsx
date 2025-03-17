"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { deleteTodo } from "@/actions/todoActions";
import { useState } from "react";
import Spinner from "./Spinner";
import EidtTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

interface IProps {
  todo: ITodo;
}

const TodosTableActions = ({ todo }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = async (id: string) => {
    setIsLoading(true);
    await deleteTodo(id);
    setIsLoading(false);
  };
  return (
    <>
      <EidtTodoForm todo={todo} />
      <Button
        size="icon"
        variant={"destructive"}
        onClick={() => onDelete(todo.id)}
      >
        {isLoading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
