export const MODAL_STYLES = {
  button: {
    size: "modal" as const,
    variant: "default" as const,
    type: "submit" as const,
  },
  icon: {
    svgWidth: 15,
    svgHeight: 15,
  },
  priority: {
    selected: {
      backgroundColor: "#3b82f622",
      borderColor: "#3b82f6",
    },
    default: {
      backgroundColor: "transparent",
      borderColor: "#9ca3af",
    },
  },
} as const; 