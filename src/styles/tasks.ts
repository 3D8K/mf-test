import { COLORS, EMPTY_STATE_STYLES, LOADER_STYLES, MESSAGE_STYLES } from './common';

export const TASK_ITEM_STYLES = {
  container: {
    width: "100%",
    minHeight: 50,
    height: "auto",
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: 15,
    paddingY: 12,
    gap: 10,
  },
  leftSection: {
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 10,
    flex: 1,
    height: "100%",
  },
  titleContainer: {
    flex: 1,
    minWidth: 200,
    maxWidth: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingX: 10,
    flexWrap: "wrap" as const,
    flexDirection: "column" as const,
    height: "100%",
    justifyContent: "center" as const,
    alignItems: "flex-start" as const,
  },
  rightSection: {
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 20,
    width: "auto",
    flexShrink: 0,
    minWidth: 250,
    height: "100%",
    justifyContent: "flex-end" as const,
  },
  dateContainer: {
    width: 150,
    flexShrink: 0,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    height: "100%",
    whiteSpace: "nowrap" as const,
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    textAlign: "center" as const,
  },
  tagContainer: {
    width: 100,
    flexShrink: 0,
    justifyContent: "center" as const,
    alignItems: "flex-end" as const,
    height: "100%",
  },
} as const;

export const TASK_LIST_STYLES = {
  container: {
    width: "100%",
    height: 630,
    marginTop: 20,
    borderRadius: 18,
    paddingX: 10,
    paddingY: 5,
    backgroundColor: COLORS.background.primary,
    flexDirection: "column" as const,
    overflow: "scroll" as const,
    overflowX: "hidden" as const,
    overflowY: "scroll" as const,
    overscrollBehavior: "contain" as const,
  },
  emptyState: {
    ...EMPTY_STATE_STYLES,
  },
  loader: {
    container: {
      flexDirection: "column" as const,
      alignItems: "center" as const,
      justifyContent: "center" as const,
      gap: 2,
      height: "100%",
    },
    icon: {
      ...LOADER_STYLES,
    },
    message: {
      ...MESSAGE_STYLES,
    }
  }
} as const;

export const TASK_CONTROLS_STYLES = {
  button: {
    variant: "ghost" as const,
    size: "icon" as const,
  },
  buttonIcon: {
    default: {
      width: 26,
      height: 26,
    },
    filter: {
      width: 16,
      height: 16,
    }
  },
  colors: {
    active: "#000000",
    inactive: "#9ca3af",
  },
  container: {
    flexDirection: "row" as const,
    gap: 3,
    flex: 1,
    maxWidth: 400,
    justifyContent: "flex-end" as const,
    alignItems: "center" as const,
  },
  filterButton: {
    variant: "ghost" as const,
    size: "icon" as const,
    containerStyles: {
      gap: 1,
      flexDirection: "row",
      alignItems: "center",
      padding: 0.5,
      flex: 1,
      minWidth: 80,
      maxWidth: 150,
    }
  }
} as const; 