import { Badge } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';

export default function Tag({ priority }) {
  // Определяем цвета в зависимости от статуса
  const getColors = (priority) => {
    switch (priority) {
      case 'low':
        return { backgroundColor: '#dcfce7', color: '#166534' }; // Зелёный
      case 'medium':
        return { backgroundColor: '#fef9c3', color: '#854d0e' }; // Жёлтый
      case 'high':
        return { backgroundColor: '#fee2e2', color: '#991b1b' }; // Красный
      default:
        return { backgroundColor: '#e5e7eb', color: '#374151' }; // Серый (по умолчанию)
    }
  };

  const colors = getColors(priority);

  return (
    <Badge backgroundColor={colors.backgroundColor }>
      <Text color={colors.color} fontSize={10}>{priority}</Text>
    </Badge>
  );
}