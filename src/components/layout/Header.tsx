import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { Plus } from "@react-three/uikit-lucide";
import { DialogTrigger } from "@react-three/uikit-default";
import { TableControls } from "./SortButtons";
import { useStore } from "../../store/store";

const BUTTON_ICON_PROPS = {
  width: 26,
  height: 26,
} as const;

const CONTAINER_STYLES = {
  width: "100%",
  flexDirection: "row" as const,
  justifyContent: "space-between" as const,
  alignItems: "center" as const,
  paddingY: 10,
} as const;

const ADD_BUTTON_STYLES = {
  variant: "ghost" as const,
  size: "icon" as const,
} as const;

export const Header = () => {
  const { setSortOrder, sortOrder, filterCompleted, setFilterCompleted } = useStore();

  const handleFilterChange = (status: 'all' | 'completed' | 'in progress') => {
    switch (status) {
      case 'completed':
        setFilterCompleted(true);
        break;
      case 'in progress':
        setFilterCompleted(false);
        break;
      default:
        setFilterCompleted(null);
    }
  };

  const getCurrentFilterStatus = () => {
    if (filterCompleted === null) return 'all';
    return filterCompleted ? 'completed' : 'in progress';
  };

  return (
    <Container {...CONTAINER_STYLES}>
      <DialogTrigger>
        <Button 
          icon={Plus} 
          iconProps={BUTTON_ICON_PROPS}
          {...ADD_BUTTON_STYLES}
        />
      </DialogTrigger>
      
      <TableControls 
        sortOrder={sortOrder} 
        onSortChange={setSortOrder}
        filterStatus={getCurrentFilterStatus()}
        onFilterChange={handleFilterChange}
      />
    </Container>
  );
};
