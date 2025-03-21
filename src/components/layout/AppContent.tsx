import { Root } from "@react-three/uikit";
import { Dialog, DialogAnchor } from "@react-three/uikit-default";
import { Header } from "./Header";
import { TaskList } from "../tasks/TaskList";
import Modal from "../modal/Modal";
import { useStore } from "../../store/store";
import { useEffect } from "react";
import { APP_CONTENT_STYLES } from "../../styles";

export const AppContent = () => {
  const { fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Root {...APP_CONTENT_STYLES}>
      <DialogAnchor>
        <Dialog>
          <Modal />
          <Header />
          <TaskList />
        </Dialog>
      </DialogAnchor>
    </Root>
  );
}; 