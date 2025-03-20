import { Badge } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { Priority } from "../../types/Todo";

interface TagProps {
  priority: Priority;
  selected?: boolean;
  interactive?: boolean;
}

const TAG_COLORS: Record<Priority, { bg: string; text: string }> = {
  low: { bg: "#dcfce7", text: "#166534" },
  medium: { bg: "#fef9c3", text: "#854d0e" },
  high: { bg: "#fee2e2", text: "#991b1b" },
} as const;

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
} as const;

export default function Tag({ priority, selected = false, interactive = false }: TagProps) {
  const colors = TAG_COLORS[priority];
  
  return (
    <Badge 
      backgroundColor={colors.bg}
      cursor={interactive ? "pointer" : "default"}
      opacity={selected ? 1 : interactive ? 0.7 : 1}
    >
      <Text color={colors.text}>
        {PRIORITY_LABELS[priority]}
      </Text>
    </Badge>
  );
}