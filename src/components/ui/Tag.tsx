import { Badge } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { useMemo } from 'react';

type Priority = 'low' | 'medium' | 'high';

interface TagColors {
  backgroundColor: string;
  color: string;
}

const TAG_COLORS: Record<Priority, TagColors> = {
  low: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  medium: {
    backgroundColor: '#fef9c3',
    color: '#854d0e',
  },
  high: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
};

const DEFAULT_COLORS: TagColors = {
  backgroundColor: '#e5e7eb',
  color: '#374151',
};

interface TagProps {
  priority: Priority;
}

export default function Tag({ priority }: TagProps) {
  const colors = useMemo(() => TAG_COLORS[priority] || DEFAULT_COLORS, [priority]);

  return (
    <Badge backgroundColor={colors.backgroundColor}>
      <Text color={colors.color} fontSize={10}>
        {priority === 'low' ? 'Low' : priority === 'medium' ? 'Medium' : 'Hard'}
      </Text>
    </Badge>
  );
}