import { TaskItem } from "./TaskItem";
import { Todo } from "../../types/Todo";
import { Container } from "@react-three/uikit";

interface TaskListProps {
  todos: Todo[];
}

export const TaskList = ({ todos }: TaskListProps) => {
  return (
    <Container
      backgroundColor="red"
      width="100%"
      height={630} // Фиксированная высота
      flexDirection="column"
      marginTop={20}
      overflow="scroll" // Автоматическая прокрутка, если контент выходит за границы
      borderRadius={18}
      paddingX={10}
      paddingY={5}
    >
      {todos.map((el, index) => (
        <TaskItem key={el.id} todo={el} rowIndex={index} />
      ))}
    </Container>
  );
};
