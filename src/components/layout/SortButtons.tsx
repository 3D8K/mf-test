import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { ArrowUpWideNarrow, ArrowDownWideNarrow } from "@react-three/uikit-lucide";

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
  width: 100,
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