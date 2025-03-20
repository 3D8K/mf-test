import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@react-three/uikit-default";
import { Text } from "@react-three/uikit";
import Input from "../ui/Input";
import { TagSwitcher } from "./TagSwitcher";
import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { useState, useMemo } from "react";
import { Priority } from "../../types/Todo";
import { useStore } from "../../store/store";
import { Plus, X } from "@react-three/uikit-lucide";

const FOOTER_STYLES = {
  flexDirection: "row" as const,
  gap: 10,
  width: "100%",
  justifyContent: "center",
  alignContent: "center",
  paddingY: 10,
} as const;

const BUTTON_STYLES = {
  size: "md" as const,
} as const;

const ICON_PROPS = {
  width: 15,
  height: 15,
  text: "",
} as const;

const PRIORITY_STYLES = {
  selected: {
    backgroundColor: "#3b82f622",
    borderColor: "#3b82f6",
  },
  default: {
    backgroundColor: "transparent",
    borderColor: "#9ca3af",
  },
} as const;

export default function Modal() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("low");
  const { addTodo } = useStore();

  const isSubmitDisabled = useMemo(() => !title.trim(), [title]);

  const handleSubmit = () => {
    if (isSubmitDisabled) return;

    addTodo({
      title: title.trim(),
      completed: false,
      priority,
    });

    // Reset form
    setTitle("");
    setPriority("low");
  };

  const handleCancel = () => {
    setTitle("");
    setPriority("low");
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          <Text>New Task</Text>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <Input 
            value={title}
            onChange={setTitle}
            placeholder="Enter task title"
          />
          <TagSwitcher 
            selectedTag={priority}
            onTagSelect={setPriority}
            styles={PRIORITY_STYLES}
          />
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Container {...FOOTER_STYLES}>
          <Button 
            {...BUTTON_STYLES}
            variant="ghost"
            type="cancel"
            onClick={handleCancel}
            icon={X}
            iconProps={ICON_PROPS}
          >
            Cancel
          </Button>
          <Button 
            {...BUTTON_STYLES}
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            icon={Plus}
            iconProps={ICON_PROPS}
          >
            Add
          </Button>
        </Container>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
