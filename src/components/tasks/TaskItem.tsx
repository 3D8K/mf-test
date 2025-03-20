import { Container, Text } from '@react-three/uikit';
import { Todo } from '../../types/Todo';
import { Checkbox } from '@react-three/uikit-default';
import Tag from '../ui/Tag';
import { useMemo } from 'react';

interface TaskItemProps {
  todo: Todo;
  rowIndex: number;
}

const CONTAINER_STYLES = {
  width: "100%",
  height: "auto",
  flexDirection: "row",
  alignItems: "center",
  paddingX: 15,
  paddingY: 10,
  gap: 10,
} as const;

const TITLE_CONTAINER_STYLES = {
  width: 300,
  flexShrink: 0,
} as const;

const DATE_CONTAINER_STYLES = {
  width: 120,
  flexShrink: 0,
} as const;

export const TaskItem = ({ todo, rowIndex }: TaskItemProps) => {
  const formattedDate = useMemo(() => {
    if (!todo.createdAt) return 'Неизвестно';
    return new Date(todo.createdAt).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }, [todo.createdAt]);

  const backgroundColor = useMemo(() => 
    rowIndex % 2 === 0 ? '#f9fafb' : '#ffffff'
  , [rowIndex]);

  return (
    <Container
      {...CONTAINER_STYLES}
      backgroundColor={backgroundColor}
    >
      <Checkbox 
        checked={todo.completed} 
        onCheckedChange={() => {}} // TODO: Добавить обработчик изменения статуса
      />

      <Container {...TITLE_CONTAINER_STYLES}>
        <Text 
          color="#1f2937"
          opacity={todo.completed ? 0.5 : 1}
        >
          {todo.title}
        </Text>
      </Container>

      <Container {...DATE_CONTAINER_STYLES}>
        <Text color="#6b7280">{formattedDate}</Text>
      </Container>

      <Tag priority={todo.priority} />
    </Container>
  );
};
