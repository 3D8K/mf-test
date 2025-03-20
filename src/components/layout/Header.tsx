import { Container, Text } from "@react-three/uikit";
import { Button } from "../ui/Button";
import {
  Plus,
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
} from "@react-three/uikit-lucide";
import { AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@react-three/uikit-default";

interface HeaderProps {
  width: number;
  height: number;
  onAddClick: () => void;
  onSortClick: () => void;
  onFilterClick: () => void;
  sortOrder: "asc" | "desc";
  filterCompleted: boolean | null;
}

export const Header = () => {
  return (
    <Container
      width={"auto"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <AlertDialogTrigger>
        <Button icon={Plus} iconProps={{ width: 15, height: 15 }} />
      </AlertDialogTrigger>
      <Container flexDirection={"row"} gap={1}>
        <Button icon={ArrowUpWideNarrow} />
        <Button icon={ArrowDownWideNarrow} />
      </Container>
    </Container>
  );
};
