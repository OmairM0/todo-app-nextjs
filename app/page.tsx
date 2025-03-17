import { getAllTodos } from "@/actions/todoActions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  const allTodos = await getAllTodos(userId as string);
  return (
    <main>
      <div>
        <AddTodoForm userId={userId} />
        <TodosTable todos={allTodos} />
      </div>
    </main>
  );
}
