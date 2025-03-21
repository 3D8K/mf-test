import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogContent,
  useDialogContext,
  DialogTrigger
} from "@react-three/uikit-default";
import { Text } from "@react-three/uikit";
import Input from "../ui/Input";
import { TagSwitcher } from "./TagSwitcher";
import { Button } from "../ui/Button";
import { useState, useMemo } from "react";
import { Priority } from "../../types";
import { useStore } from "../../store/store";
import { MODAL_STYLES } from "../../styles";

const ModalContent = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("low");
  const { addTodo } = useStore();
  const { setOpen } = useDialogContext();

  const isSubmitDisabled = useMemo(() => !title.trim(), [title]);

  const resetForm = () => {
    setTitle("");
    setPriority("low");
  };

  const handleSubmit = () => {
    if (isSubmitDisabled) return;

    addTodo({
      title: title.trim(),
      priority,
    });

    resetForm();
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
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            Add task
          </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default function Modal() {
  return (
    <DialogTrigger>
      <ModalContent />
    </DialogTrigger>
  );
}
