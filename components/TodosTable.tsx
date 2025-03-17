import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodosTableActions from "./TodosTableActions";

const TodosTable = ({ todos }: { todos: ITodo[] }) => {
  return (
    <Table>
      <TableCaption>
        {todos.length > 0
          ? "A list of your recent todos."
          : "You don't have todos yet."}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="secondary">Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodosTable;
