import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { ArrowUpWideNarrow, ArrowDownWideNarrow } from "@react-three/uikit-lucide";

const BUTTON_ICON_PROPS = {
  svgWidth: 15,
  svgHeight: 15,
  text: "",
} as const;

const COLORS = {
  active: "#000000",
  inactive: "#9ca3af",
} as const;

const CONTAINER_STYLES = {
  flexDirection: "row" as const,
  gap: 1,
  width: 80,
  justifyContent: "flex-end" as const,
} as const;

interface SortButtonsProps {
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
}

export const SortButtons = ({ sortOrder, onSortChange }: SortButtonsProps) => {
  const getIconProps = (isActive: boolean) => ({
    ...BUTTON_ICON_PROPS,
    color: isActive ? COLORS.active : COLORS.inactive,
  });

  return (
    <Container {...CONTAINER_STYLES}>
      <Button
        icon={ArrowUpWideNarrow}
        iconProps={getIconProps(sortOrder === "asc")}
        onClick={() => onSortChange("asc")}
      />
      <Button
        icon={ArrowDownWideNarrow}
        iconProps={getIconProps(sortOrder === "desc")}
        onClick={() => onSortChange("desc")}
      />
    </Container>
  );
}; 