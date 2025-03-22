import { TaskItem } from "./TaskItem";
import { Todo } from "../../types";
import { Container, Text } from "@react-three/uikit";
import { useMemo, memo } from "react";
import { useStore } from "../../store/store";
import { Loader } from "@react-three/uikit-lucide";
import { TASK_LIST_STYLES } from "../../styles";

const TaskListItem = memo(({ todo, index }: { todo: Todo; index: number }) => (
  <TaskItem 
    key={todo.id}
    todo={todo} 
    rowIndex={index} 
  />
));

TaskListItem.displayName = 'TaskListItem';

export const TaskList = () => {
  const { todos, sortOrder, filterCompleted, isLoading, error } = useStore();
  
  const filteredAndSortedTodos = useMemo(() => {
    const filteredTodos = filterCompleted === null 
      ? todos 
      : todos.filter(todo => todo.completed === filterCompleted);
    return filteredTodos.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [todos, sortOrder, filterCompleted]);

  const renderContent = () => {
    if (error) {
      return (
        <Container {...TASK_LIST_STYLES.emptyState}>
          <Text {...TASK_LIST_STYLES.loader.message}>Error loading tasks. Please try again.</Text>
        </Container>
      );
    }

    if (isLoading) {
      return (
        <Container {...TASK_LIST_STYLES.emptyState}>
          <Container {...TASK_LIST_STYLES.loader.container}>
            <Loader {...TASK_LIST_STYLES.loader.icon} />
            <Text {...TASK_LIST_STYLES.loader.message}>Loading tasks...</Text>
          </Container>
        </Container>
      );
    }

    if (filteredAndSortedTodos.length === 0) {
      const message = filterCompleted !== null
        ? `No ${filterCompleted ? 'completed' : 'active'} tasks found`
        : 'No tasks yet. Create your first task!';

      return (
        <Container {...TASK_LIST_STYLES.emptyState}>
          <Text {...TASK_LIST_STYLES.loader.message}>{message}</Text>
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
    <Container {...TASK_LIST_STYLES.container}>
      {renderContent()}
    </Container>
  );
};
