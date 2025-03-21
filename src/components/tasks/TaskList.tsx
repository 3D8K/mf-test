import { TaskItem } from "./TaskItem";
import { Todo } from "../../types";
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

const LOADER_CONTAINER_STYLES = {
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  gap: 2,
  height: "100%",
} as const;

const TaskListItem = memo(({ todo, index }: { todo: Todo; index: number }) => (
  <TaskItem 
    key={todo.id}
    todo={todo} 
    rowIndex={index} 
  />
));

TaskListItem.displayName = 'TaskListItem';

export const TaskList = () => {
  const { todos, sortOrder, filterCompleted, isLoading } = useStore();

  const filteredAndSortedTodos = useMemo(() => {
    // Фильтрация
    const filteredTodos = filterCompleted === null 
      ? todos 
      : todos.filter(todo => todo.completed === filterCompleted);

    // Сортировка
    return filteredTodos.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [todos, sortOrder, filterCompleted]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <Container {...EMPTY_STATE_STYLES}>
          <Container {...LOADER_CONTAINER_STYLES}>
            <Loader {...LOADER_STYLES} />
            <Text {...MESSAGE_STYLES}>Loading tasks...</Text>
          </Container>
        </Container>
      );
    }

    if (filteredAndSortedTodos.length === 0) {
      const message = filterCompleted !== null
        ? `No ${filterCompleted ? 'completed' : 'active'} tasks found`
        : 'No tasks yet. Create your first task!';

      return (
        <Container {...EMPTY_STATE_STYLES}>
          <Text {...MESSAGE_STYLES}>{message}</Text>
        </Container>
      );
    }

    return filteredAndSortedTodos.map((todo, index) => (
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
