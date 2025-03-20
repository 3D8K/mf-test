import { Button } from './Button';

interface HeaderProps {
  width: number;
  height: number;
  onAddClick: () => void;
  onSortClick: () => void;
  onFilterClick: () => void;
  sortOrder: 'asc' | 'desc';
  filterCompleted: boolean | null;
}

export const Header = ({
  width,
  height,
  onAddClick,
  onSortClick,
  onFilterClick,
  sortOrder,
  filterCompleted,
}: HeaderProps) => {
  return (
    <>
      <Button
        position={[-width / 2, height / 2 + 1, 0]}
        size={[2, 0.8, 0.1]}
        onClick={onAddClick}
      >
        Добавить
      </Button>
      <Button
        position={[width / 2 - 4, height / 2 + 1, 0]}
        size={[2, 0.8, 0.1]}
        onClick={onSortClick}
      >
        {sortOrder === 'asc' ? 'Сортировка ↓' : 'Сортировка ↑'}
      </Button>
      <Button
        position={[width / 2 - 1, height / 2 + 1, 0]}
        size={[2, 0.8, 0.1]}
        onClick={onFilterClick}
      >
        {filterCompleted === null ? 'Все' : filterCompleted ? 'Активные' : 'Завершенные'}
      </Button>
    </>
  );
}; 