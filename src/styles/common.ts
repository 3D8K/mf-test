export const COLORS = {
  text: {
    primary: "#111827",
    secondary: "#6b7280",
    disabled: "#9ca3af",
  },
  background: {
    primary: "#ffffff",
    alternate: {
      even: "#f9fafb",
      odd: "#f3f4f6",
    },
    transparent: "#ffffff",
  },
  accent: {
    blue: "#3b82f6",
    green: "#22c55e",
    red: "#ef4444",
  },
} as const;

export const INPUT_STYLES = {
  width: "100%",
  maxWidth: 600,
  error: {
    text: {
      color: COLORS.accent.red,
      fontSize: 12,
      marginTop: 40,
      positionType: "absolute",
      left: 0,
    }
  }
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