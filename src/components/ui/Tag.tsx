import { Badge } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { Priority } from "../../types/Todo";
import { TAG_COLORS } from "../../styles";

interface TagProps {
  priority: Priority;
  interactive?: boolean;
}

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
} as const;

export default function Tag({ priority, interactive = false }: TagProps) {
  const colors = TAG_COLORS[priority];
  
  return (
    <Badge 
      backgroundColor={colors.bg}
      cursor={interactive ? "pointer" : "default"}
    >
      <Text color={colors.text}>
        {PRIORITY_LABELS[priority]}
      </Text>
    </Badge>
  );
}