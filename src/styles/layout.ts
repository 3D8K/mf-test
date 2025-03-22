export const HEADER_STYLES = {
  button: {
    icon: {
      width: 26,
      height: 26,
    },
    styles: {
      variant: "ghost" as const,
      size: "icon" as const,
    }
  },
  container: {
    width: "100%",
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
    paddingY: 10,
  }
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