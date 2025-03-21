import { Todo } from "../types/Todo";

export const sortTodosByDate = (todos: Todo[], sortOrder: "asc" | "desc"): Todo[] => {
  return [...todos].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
}; 