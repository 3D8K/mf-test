import { Container, Text } from '@react-three/uikit';
import { Checkbox } from '@react-three/uikit-default';
import { useMemo } from 'react';
import { Todo } from '../../types';
import { useStore } from '../../store/store';
import Tag from '../ui/Tag';
import { formatDate } from '../../utils/date';
import { TASK_ITEM_STYLES, COLORS } from '../../utils/styles';

interface TaskItemProps {
  todo: Todo;
  rowIndex: number;
}

export const TaskItem = ({ todo, rowIndex }: TaskItemProps) => {
  const { toggleTodo } = useStore();

  const formattedDate = useMemo(() => formatDate(todo.createdAt), [todo.createdAt]);

  const backgroundColor = useMemo(() => 
    rowIndex % 2 === 0 ? COLORS.background.alternate.even : COLORS.background.alternate.odd
  , [rowIndex]);

  const handleToggle = async (checked: boolean) => {
    try {
      await toggleTodo(todo.id, checked);
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  return (
    <Container
      {...TASK_ITEM_STYLES.container}
      backgroundColor={backgroundColor}
    >
      <Container {...TASK_ITEM_STYLES.leftSection}>
        <Checkbox 
          checked={todo.completed} 
          onCheckedChange={handleToggle}
        />

        <Container {...TASK_ITEM_STYLES.titleContainer}>
          <Text 
            color={COLORS.text.primary}
            opacity={todo.completed ? 0.5 : 1}
          >
            {todo.title}
          </Text>
        </Container>
      </Container>

      <Container {...TASK_ITEM_STYLES.rightSection}>
        <Container {...TASK_ITEM_STYLES.dateContainer}>
          <Text color={COLORS.text.secondary}>
            {formattedDate}
          </Text>
        </Container>

        <Tag priority={todo.priority} />
      </Container>
    </Container>
  );
};
