import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { Plus } from "@react-three/uikit-lucide";
import { DialogTrigger } from "@react-three/uikit-default";
import { TaskControls } from "./TaskControls";
import { useStore } from "../../store/store";
import { HEADER_STYLES } from "../../styles";

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
    <Container {...HEADER_STYLES.container}>
      <DialogTrigger>
        <Button 
          icon={Plus} 
          iconProps={HEADER_STYLES.button.icon}
          {...HEADER_STYLES.button.styles}
        />
      </DialogTrigger>
      
      <TaskControls 
        sortOrder={sortOrder} 
        onSortChange={setSortOrder}
        filterStatus={getCurrentFilterStatus()}
        onFilterChange={handleFilterChange}
      />
    </Container>
  );
};
