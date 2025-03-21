import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogContent,
  useDialogContext
} from "@react-three/uikit-default";
import { Text } from "@react-three/uikit";
import Input from "../ui/Input";
import { TagSwitcher } from "./TagSwitcher";
import { Button } from "../ui/Button";
import { useState, useMemo } from "react";
import { Priority } from "../../types/Todo";
import { useStore } from "../../store/store";
import { Plus } from "@react-three/uikit-lucide";
import { MODAL_STYLES } from "../../utils/styles";

export default function Modal() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("low");
  const { addTodo } = useStore();
  const { setOpen } = useDialogContext();

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
    
    // Close modal
    setOpen(false);
  };

  return (
    <DialogContent maxWidth={500}>
      <DialogHeader>
        <DialogTitle>
          <Text>New Task</Text>
        </DialogTitle>
        <DialogDescription>
          <Input 
            value={title}
            onChange={setTitle}
            placeholder="Enter task title"
          />
          <TagSwitcher 
            selectedTag={priority}
            onTagSelect={setPriority}
            styles={MODAL_STYLES.priority}
          />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
          <Button 
            {...MODAL_STYLES.button}
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            icon={Plus}
            iconProps={MODAL_STYLES.icon}
          >
            Add
          </Button>
      </DialogFooter>
    </DialogContent>
  );
}
