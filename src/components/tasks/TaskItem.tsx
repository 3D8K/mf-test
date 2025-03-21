import { Container, Text } from '@react-three/uikit';
import { Todo } from '../../types/Todo';
import { Checkbox } from '@react-three/uikit-default';
import Tag from '../ui/Tag';
import { useMemo } from 'react';
import { useStore } from '../../store/store';

interface TaskItemProps {
  todo: Todo;
  rowIndex: number;
}

const CONTAINER_STYLES = {
  width: "100%",
  minHeight: 50,
  flexDirection: "row" as const,
  alignItems: "center",
  justifyContent: "space-between",
  paddingX: 15,
  paddingY: 10,
  gap: 10,
} as const;

const LEFT_SECTION_STYLES = {
  flexDirection: "row" as const,
  alignItems: "center",
  gap: 10,
  flex: 1,
} as const;

const TITLE_CONTAINER_STYLES = {
  flex: 1,
  maxWidth: 600,
  paddingX: 10,
  overflow: "hidden",
  textOverflow: "ellipsis",
  flexWrap: "wrap" as const,
} as const;

const RIGHT_SECTION_STYLES = {
  flexDirection: "row" as const,
  alignItems: "center",
  gap: 20,
  width: "auto",
  flexShrink: 0,
} as const;

const DATE_CONTAINER_STYLES = {
  width: 150,
  flexShrink: 0,
  justifyContent: "flex-end" as const,
  alignItems: "flex-end" as const,
} as const;


const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
} as const;

export const TaskItem = ({ todo, rowIndex }: TaskItemProps) => {
  const { toggleTodo } = useStore();

  const formattedDate = useMemo(() => {
    if (!todo.createdAt) return 'Unknown';
    
    const date = new Date(todo.createdAt);
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    return new Intl.DateTimeFormat('en-US', {
      ...DATE_FORMAT_OPTIONS,
      timeZone: userTimezone,
    }).format(date);
  }, [todo.createdAt]);

  const backgroundColor = useMemo(() => 
    rowIndex % 2 === 0 ? '#f9fafb' : '#ffffff'
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
      {...CONTAINER_STYLES}
      backgroundColor={backgroundColor}
    >
      <Container {...LEFT_SECTION_STYLES}>
        <Checkbox 
          checked={todo.completed} 
          onCheckedChange={handleToggle}
        />

        <Container {...TITLE_CONTAINER_STYLES}>
          <Text 
            color="#1f2937"
            opacity={todo.completed ? 0.5 : 1}
          >
            {todo.title}
          </Text>
        </Container>
      </Container>

      <Container {...RIGHT_SECTION_STYLES}>
        <Container {...DATE_CONTAINER_STYLES}>
          <Text 
            color="#6b7280"
          >
            {formattedDate}
          </Text>
        </Container>

        <Tag priority={todo.priority} />
      </Container>
    </Container>
  );
};
