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

const CONTAINER_STYLES = {
  width: "100%",
  flexDirection: "row" as const,
  justifyContent: "space-between" as const,
  alignItems: "center" as const,
  paddingY: 10,
} as const;

const ADD_BUTTON_STYLES = {
  variant: "ghost" as const,
  size: "sm" as const,
} as const;

export const Header = () => {
  const { setSortOrder, sortOrder } = useStore();

  return (
    <Container {...CONTAINER_STYLES}>
      <AlertDialogTrigger>
        <Button 
          icon={Plus} 
          iconProps={BUTTON_ICON_PROPS}
          {...ADD_BUTTON_STYLES}
        />
      </AlertDialogTrigger>
      
      <SortButtons 
        sortOrder={sortOrder} 
        onSortChange={setSortOrder}
      />
    </Container>
  );
};
