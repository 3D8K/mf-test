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

export const TAG_COLORS = {
  low: { bg: "#dcfce7", text: "#166534" },
  medium: { bg: "#fef9c3", text: "#854d0e" },
  high: { bg: "#fee2e2", text: "#991b1b" },
} as const;

export const INPUT_STYLES = {
  width: "100%",
  maxWidth: 600,
} as const;

export const EMPTY_STATE_STYLES = {
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
} as const;

export const LOADER_STYLES = {
  width: 30,
  height: 30,
  color: "#6b7280",
} as const;

export const MESSAGE_STYLES = {
  fontSize: 20,
  color: "#6b7280",
  marginTop: 10,
} as const; 