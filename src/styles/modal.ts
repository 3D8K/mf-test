import { COLORS } from './common';

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
      backgroundColor: "#e0e7ff",
      borderColor: COLORS.accent.blue,
    },
    default: {
      backgroundColor: COLORS.background.transparent,
      borderColor: "#9ca3af",
    },
  },
} as const; 