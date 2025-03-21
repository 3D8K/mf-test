import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { ArrowUpWideNarrow, ArrowDownWideNarrow, Filter } from "@react-three/uikit-lucide";
import { TASK_CONTROLS_STYLES } from "../../styles";

type FilterStatus = 'all' | 'completed' | 'in progress';

interface TaskControlsProps {
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
  filterStatus: FilterStatus;
  onFilterChange: (status: FilterStatus) => void;
}

const getFilterLabel = (status: FilterStatus) => {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'in progress':
      return 'In Progress';
    default:
      return 'All';
  }
};

export const TaskControls = ({ 
  sortOrder, 
  onSortChange,
  filterStatus,
  onFilterChange
}: TaskControlsProps) => {
  const getIconProps = (isActive: boolean, isFilter = false) => ({
    ...(isFilter ? TASK_CONTROLS_STYLES.buttonIcon.filter : TASK_CONTROLS_STYLES.buttonIcon.default),
    color: isActive ? TASK_CONTROLS_STYLES.colors.active : TASK_CONTROLS_STYLES.colors.inactive,
  });

  const handleFilterClick = () => {
    const nextStatus: FilterStatus = 
      filterStatus === 'all' ? 'completed' :
      filterStatus === 'completed' ? 'in progress' : 'all';
    onFilterChange(nextStatus);
  };

  return (
    <Container {...TASK_CONTROLS_STYLES.container}>
      <Button
        {...TASK_CONTROLS_STYLES.filterButton}
        icon={Filter}
        iconProps={getIconProps(filterStatus !== 'all', true)}
        onClick={handleFilterClick}
        containerStyles={{
          ...TASK_CONTROLS_STYLES.filterButton.containerStyles,
          fontSize: 10,
        }}
      >
        {getFilterLabel(filterStatus)}
      </Button>

      <Button
        {...TASK_CONTROLS_STYLES.button}
        icon={ArrowUpWideNarrow}
        iconProps={getIconProps(sortOrder === "asc")}
        onClick={() => onSortChange("asc")}
        active={sortOrder === "asc"}
      />
      <Button
        {...TASK_CONTROLS_STYLES.button}
        icon={ArrowDownWideNarrow}
        iconProps={getIconProps(sortOrder === "desc")}
        onClick={() => onSortChange("desc")}
        active={sortOrder === "desc"}
      />
    </Container>
  );
}; 