import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { Plus } from "@react-three/uikit-lucide";
import { AlertDialogTrigger } from "@react-three/uikit-default";
import { SortButtons } from "./SortButtons";
import { useStore } from "../../store/store";

const BUTTON_ICON_PROPS = {
  svgWidth: 15,
  svgHeight: 15,
  text: "",
} as const;

export const Header = () => {
  const { setSortOrder, sortOrder } = useStore();

  return (
    <Container
      width="auto"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingY={10}
    >
      <AlertDialogTrigger>
        <Button 
          icon={Plus} 
          iconProps={BUTTON_ICON_PROPS}
          variant="ghost"
          size="sm"
        />
      </AlertDialogTrigger>
      
      <SortButtons 
        sortOrder={sortOrder} 
        onSortChange={setSortOrder}
      />
    </Container>
  );
};
