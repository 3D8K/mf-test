import { Container } from "@react-three/uikit";
import { Button } from "../ui/Button";
import { Todo } from "../../types/Todo";
import { useMemo, useState, useEffect } from "react";

interface TodoFiltersProps {
  todos: Todo[];
  onFilterChange: (todos: Todo[]) => void;
}

export const TodoFilters = ({ todos, onFilterChange }: TodoFiltersProps) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filterCompleted, setFilterCompleted] = useState<boolean | null>(null);

  const filteredAndSortedTodos = useMemo(() => {
    return todos
      .filter((todo) => filterCompleted === null || todo.completed === filterCompleted)
      .sort((a: Todo, b: Todo) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
  }, [todos, filterCompleted, sortOrder]);

  useEffect(() => {
    onFilterChange(filteredAndSortedTodos);
  }, [filteredAndSortedTodos, onFilterChange]);

  return (
    <Container
      flexDirection="row"
      gap={10}
      justifyContent={"space-between"}
      marginBottom={10}
    >
      <Button
        onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
        variant="outline"
        size="sm"
      >
        {sortOrder === "asc" ? "Ascending" : "Descending"}
      </Button>

      <Button
        onClick={() => setFilterCompleted(prev => 
          prev === null ? true : prev === true ? false : null
        )}
        variant="outline"
        size="sm"
      >
        {filterCompleted === null 
          ? "All" 
          : filterCompleted 
            ? "Completed" 
            : "Incomplete"
        }
      </Button>
    </Container>
  );
}; 