export const EMPTY_STATE_STYLES = {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
} as const;

export const LOADER_STYLES = {
  width: 30,
  height: 30,
  color: "#6b7280",
} as const;

export const MESSAGE_STYLES = {
  fontSize: 1,
  color: "#6b7280",
  marginTop: 10,
} as const;

export const COLORS = {
  text: {
    primary: "#1f2937",
    secondary: "#6b7280",
    disabled: "#9ca3af",
  },
  background: {
    primary: "#ffffff",
    secondary: "#f9fafb",
    transparent: "transparent",
    alternate: {
      even: "#f9fafb",
      odd: "#ffffff",
    },
  },
  accent: {
    blue: "#3b82f6",
    green: "#22c55e",
    red: "#ef4444",
  },
} as const;

export const BUTTON_SIZES = {
  sm: { width: 24, height: 12, fontSize: 0.5, iconSize: 0.7 },
  md: { width: 32, height: 16, fontSize: 0.6, iconSize: 0.9 },
  lg: { width: 40, height: 20, fontSize: 0.7, iconSize: 1.1 },
  icon: { width: 16, height: 16, fontSize: 0.6, iconSize: 1 },
} as const;

export const BUTTON_TYPE_COLORS = {
  primary: {
    bg: COLORS.accent.blue,
    text: COLORS.background.primary,
    hover: {
      bg: "#2563eb",
      text: COLORS.background.primary,
    }
  },
  submit: {
    bg: COLORS.accent.green,
    text: COLORS.background.primary,
    hover: {
      bg: "#16a34a",
      text: COLORS.background.primary,
    }
  },
  cancel: {
    bg: COLORS.accent.red,
    text: COLORS.background.primary,
    hover: {
      bg: "#dc2626",
      text: COLORS.background.primary,
    }
  },
} as const;

export const BUTTON_VARIANT_MODIFIERS = {
  default: (colors: { bg: string; text: string; hover: { bg: string; text: string } }) => colors,
  outline: (colors: { bg: string; text: string; hover: { bg: string; text: string } }) => ({
    bg: COLORS.background.transparent,
    text: colors.bg,
    hover: {
      bg: `${colors.bg}10`,
      text: colors.hover.bg,
    }
  }),
  ghost: (colors: { bg: string; text: string; hover: { bg: string; text: string } }) => ({
    bg: COLORS.background.transparent,
    text: colors.bg,
    hover: {
      bg: `${colors.bg}10`,
      text: colors.hover.bg,
    }
  }),
} as const;

export const INPUT_STYLES = {
  width: "100%",
  maxWidth: 600,
  overflow: "hidden",
} as const;

export const TAG_COLORS = {
  low: { bg: "#dcfce7", text: "#166534" },
  medium: { bg: "#fef9c3", text: "#854d0e" },
  high: { bg: "#fee2e2", text: "#991b1b" },
} as const;

export const TASK_ITEM_STYLES = {
  container: {
    width: "100%",
    minHeight: 50,
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: 15,
    paddingY: 10,
    gap: 10,
  },
  leftSection: {
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    maxWidth: 600,
    overflow: "hidden",
    paddingX: 10,
    flexWrap: "wrap" as const,
  },
  rightSection: {
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 20,
    width: "auto",
    flexShrink: 0,
  },
  dateContainer: {
    width: 150,
    flexShrink: 0,
    justifyContent: "flex-end" as const,
    alignItems: "flex-end" as const,
  },
} as const;

export const BUTTON_CONTAINER_STYLES = {
  flexDirection: "row" as const,
  gap: 2,
  alignItems: "center",
  justifyContent: "center",
  padding: 4,
  cursor: "pointer",
  transition: "all 0.2s",
} as const;

export const TASK_LIST_STYLES = {
  width: "100%",
  height: 630,
  marginTop: 20,
  borderRadius: 18,
  paddingX: 10,
  paddingY: 5,
} as const;

export const APP_CANVAS_STYLES = {
  position: "absolute" as const,
  inset: "0",
  touchAction: "none",
} as const;

export const APP_CONTENT_STYLES = {
  backgroundColor: "#f0f1f3",
  sizeX: 10,
  sizeY: 7,
  flexDirection: "column" as const,
  borderRadius: 24,
  padding: 15,
} as const;

export const MODAL_STYLES = {
  button: {
    size: "md" as const,
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