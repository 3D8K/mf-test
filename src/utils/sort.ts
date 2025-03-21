import { Todo } from "../types/Todo";

export const sortTodosByDate = (todos: Todo[], sortOrder: "asc" | "desc"): Todo[] => {
  return [...todos].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    const comparison = sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    // Если даты равны, сортируем по id для стабильности
    return comparison === 0 ? a.id.localeCompare(b.id) : comparison;
  });
}; 