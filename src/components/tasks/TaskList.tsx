import { TaskItem } from "./TaskItem";
import { Todo } from "../../types/Todo";
import { Container, Text } from "@react-three/uikit";
import { useMemo, memo } from "react";
import { useStore } from "../../store/store";
import { Loader } from "@react-three/uikit-lucide";
import { 
  EMPTY_STATE_STYLES, 
  LOADER_STYLES, 
  MESSAGE_STYLES,
  TASK_LIST_STYLES,
  COLORS 
} from "../../utils/styles";
import { sortTodosByDate } from "../../utils/sort";

interface TaskListProps {
  todos: Todo[];
}

const TaskListItem = memo(({ todo, index }: { todo: Todo; index: number }) => (
  <TaskItem 
    key={todo.id}
    todo={todo} 
    rowIndex={index} 
  />
));

TaskListItem.displayName = 'TaskListItem';

export const TaskList = ({ todos }: TaskListProps) => {
  const { sortOrder, isLoading } = useStore();

  const sortedTodos = useMemo(() => 
    sortTodosByDate(todos, sortOrder),
    [todos, sortOrder]
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <Container {...EMPTY_STATE_STYLES}>
          <Loader {...LOADER_STYLES} />
          <Text {...MESSAGE_STYLES}>Loading tasks...</Text>
        </Container>
      );
    }

    if (sortedTodos.length === 0) {
      return (
        <Container {...EMPTY_STATE_STYLES}>
          <Text {...MESSAGE_STYLES}>No tasks yet. Create your first task!</Text>
        </Container>
      );
    }

    return sortedTodos.map((todo, index) => (
      <TaskListItem 
        key={todo.id}
        todo={todo} 
        index={index}
      />
    ));
  };

  return (
    <Container
      {...TASK_LIST_STYLES}
      backgroundColor={COLORS.background.primary}
      flexDirection="column"
      overflow="scroll"
    >
      {renderContent()}
    </Container>
  );
};
