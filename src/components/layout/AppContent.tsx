import { Root } from "@react-three/uikit";
import { Dialog, DialogAnchor } from "@react-three/uikit-default";
import { Header } from "./Header";
import { TaskList } from "../tasks/TaskList";
import Modal from "../modal/Modal";
import { useStore } from "../../store/store";
import { useEffect } from "react";

export const AppContent = () => {
  const { todos, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Root
      backgroundColor="#f0f1f3"
      sizeX={10}
      sizeY={7}
      flexDirection="column"
      borderRadius={24}
      padding={15}
    >
      <DialogAnchor>
        <Dialog>
          <Modal />
          <Header />
          <TaskList todos={todos} />
        </Dialog>
      </DialogAnchor>
    </Root>
  );
}; 