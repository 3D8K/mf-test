import { Container, Text } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { ArrowUpWideNarrow, ArrowDownWideNarrow, Filter } from "@react-three/uikit-lucide";

const BUTTON_STYLES = {
  variant: "ghost" as const,
  size: "icon" as const,
} as const;

const BUTTON_ICON_PROPS = {
  width: 26,
  height: 26,
} as const;

const COLORS = {
  active: "#000000",
  inactive: "#9ca3af",
} as const;

const CONTAINER_STYLES = {
  flexDirection: "row" as const,
  gap: 3,
  width: 220,
  justifyContent: "flex-end" as const,
  alignItems: "center" as const,
} as const;

const FILTER_BUTTON_STYLES = {
  ...BUTTON_STYLES,
  containerStyles: {
    gap: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 0.5,
  }
} as const;

type FilterStatus = 'all' | 'completed' | 'in progress';

interface TableControlsProps {
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

export const TableControls = ({ 
  sortOrder, 
  onSortChange,
  filterStatus,
  onFilterChange
}: TableControlsProps) => {
  const getIconProps = (isActive: boolean) => ({
    ...BUTTON_ICON_PROPS,
    color: isActive ? COLORS.active : COLORS.inactive,
  });

  const handleFilterClick = () => {
    const nextStatus: FilterStatus = 
      filterStatus === 'all' ? 'completed' :
      filterStatus === 'completed' ? 'in progress' : 'all';
    onFilterChange(nextStatus);
  };

  return (
    <Container {...CONTAINER_STYLES}>
      <Button
        {...FILTER_BUTTON_STYLES}
        icon={Filter}
        iconProps={getIconProps(filterStatus !== 'all')}
        onClick={handleFilterClick}
      >
        <Text 
          color={filterStatus !== 'all' ? COLORS.active : COLORS.inactive}
          fontSize={0.8}
          marginLeft={1}
        >
          {getFilterLabel(filterStatus)}
        </Text>
      </Button>

      <Button
        {...BUTTON_STYLES}
        icon={ArrowUpWideNarrow}
        iconProps={getIconProps(sortOrder === "asc")}
        onClick={() => onSortChange("asc")}
        active={sortOrder === "asc"}
      />
      <Button
        {...BUTTON_STYLES}
        icon={ArrowDownWideNarrow}
        iconProps={getIconProps(sortOrder === "desc")}
        onClick={() => onSortChange("desc")}
        active={sortOrder === "desc"}
      />
    </Container>
  );
}; 