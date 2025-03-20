import { Container, Text } from '@react-three/uikit';
import { Todo } from '../../types/todo';
import { Checkbox } from '@react-three/uikit-default';
import Tag from '../ui/Tag';

interface TaskItemProps {
  todo: Todo;
  rowIndex: number;
}

export const TaskItem = ({ todo, rowIndex }: TaskItemProps) => {
  // Функция для форматирования даты
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Неизвестно';
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Функция для получения фона по индексу
  const getBackgroundColor = (index: number) => (index % 2 === 0 ? '#f9fafb' : '#ffffff');

  return (
    <Container
      width="100%"
      height="auto"
      backgroundColor={getBackgroundColor(rowIndex)}
      flexDirection="row"
      alignItems="center"
      paddingX={15}
      paddingY={10}
      gap={10}
    >
      <Checkbox checked={todo.completed} />

      <Container width={300} flexShrink={0}>
        <Text color="#1f2937">{todo.title}</Text>
      </Container>

      <Container width={120} flexShrink={0}>
        <Text color="#6b7280">{formatDate(todo.createdAt)}</Text>
      </Container>

      <Tag priority={todo.priority} />
    </Container>
  );
};
