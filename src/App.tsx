import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { TaskList } from "./components/tasks/TaskList";
import { TaskForm } from "./components/forms/TaskForm";
import { Header } from "./components/layout/Header";
import {
  AlertDialog,
  Defaults,
  DialogAnchor,
} from "@react-three/uikit-default";
import { Todo } from "./types/Todo";
import { useStore } from "./store/store";
import { Root } from "@react-three/uikit";
import Modal from "./components/modal/Modal";

const LIST_WIDTH = 20;
const LIST_HEIGHT = 8;
const ITEM_HEIGHT = 1;
const FORM_HEIGHT = 10;

export const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filterCompleted, setFilterCompleted] = useState<boolean | null>(null);

  const { todos, addTodo, toggleTodo, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = (
    todo: Omit<Todo, "id" | "createdAt" | "updatedAt">
  ) => {
    addTodo(todo);
    setShowForm(false);
  };

  const handleToggleTodo = (id: string, completed: boolean) => {
    toggleTodo(id, completed);
  };

  const filteredAndSortedTodos = todos
    .filter(
      (todo) => filterCompleted === null || todo.completed === filterCompleted
    )
    .sort((a: Todo, b: Todo) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  return (
    <Canvas
      style={{ position: "absolute", inset: "0", touchAction: "none" }}
      gl={{ localClippingEnabled: true }}
    >
      <OrbitControls />
      <Defaults>
        <Root
          backgroundColor="#f0f1f3"
          sizeX={10}
          sizeY={7}
          flexDirection="column"
          borderRadius={24}
          padding={15}
        >
          <DialogAnchor>
            <AlertDialog>
              <Modal/>
              <Header />
              <TaskList todos={todos} />
            </AlertDialog>
          </DialogAnchor>
        </Root>
      </Defaults>
    </Canvas>
  );
};
