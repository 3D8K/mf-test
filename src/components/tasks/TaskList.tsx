import { TaskItem } from "./TaskItem";
import { Todo } from "../../types/Todo";
import { Container } from "@react-three/uikit";
import { useMemo } from "react";
import { useStore } from "../../store/store";

interface TaskListProps {
  todos: Todo[];
}

const CONTAINER_STYLES = {
  width: "100%",
  height: 630,
  marginTop: 20,
  borderRadius: 18,
  paddingX: 10,
  paddingY: 5,
} as const;

export const TaskList = ({ todos }: TaskListProps) => {
  const { sortOrder } = useStore();

  const sortedTodos = useMemo(() => 
    [...todos].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    }),
    [todos, sortOrder]
  );

  return (
    <Container
      {...CONTAINER_STYLES}
      backgroundColor="#ffffff"
      flexDirection="column"
      overflow="scroll"
    >
      {sortedTodos.map((todo, index) => (
        <TaskItem 
          key={todo.id} 
          todo={todo} 
          rowIndex={index} 
        />
      ))}
    </Container>
  );
};
