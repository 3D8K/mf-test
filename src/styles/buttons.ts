import { COLORS } from './common';

export const BUTTON_SIZES = {
  sm: { width: 20, height: 10, fontSize: 13, iconSize: 0.6 },
  md: { width: 26, height: 13, fontSize: 14, iconSize: 0.7 },
  lg: { width: 32, height: 16, fontSize: 15, iconSize: 0.9 },
  icon: { width: 26, height: 26, fontSize: 14, iconSize: 1 },
  modal: { width: 100, height: 25, fontSize: 14, iconSize: 1.2 },
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

export const BUTTON_STYLES = {
  container: {
    default: {
      flexDirection: "row" as const,
      gap: 2,
      alignItems: "center",
      justifyContent: "center",
      padding: 4,
      cursor: "pointer",
      transition: "all 0.2s",
    },
    modal: {
      flexDirection: "row" as const,
      gap: 2,
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
      cursor: "pointer",
      transition: "all 0.2s",
      width: 200,
      height: 48,
      borderRadius: 8,
    }
  },
  sizes: BUTTON_SIZES,
  typeColors: BUTTON_TYPE_COLORS,
  variants: BUTTON_VARIANT_MODIFIERS,
} as const; 