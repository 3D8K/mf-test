import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { ArrowUpWideNarrow, ArrowDownWideNarrow } from "@react-three/uikit-lucide";

const BUTTON_ICON_PROPS = {
  svgWidth: 15,
  svgHeight: 15,
  text: "",
} as const;

interface SortButtonsProps {
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
}

export const SortButtons = ({ sortOrder, onSortChange }: SortButtonsProps) => {
  return (
    <Container flexDirection="row" gap={1}>
      <Button
        icon={ArrowUpWideNarrow}
        iconProps={BUTTON_ICON_PROPS}
        onClick={() => onSortChange("asc")}
      />
      <Button
        icon={ArrowDownWideNarrow}
        iconProps={BUTTON_ICON_PROPS}
        onClick={() => onSortChange("desc")}
      />
    </Container>
  );
}; 