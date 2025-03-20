import { Button as ButtonComponent } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { ReactNode } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonType = 'primary' | 'cancel' | 'submit';

interface IconProps {
  width: number;
  height: number;
  text: string;
  color?: string;
}

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  icon?: React.ElementType<IconProps>;
  iconProps?: Partial<IconProps>;
}

const BUTTON_SIZES: Record<ButtonSize, { width: number; height: number; fontSize: number; iconSize: number }> = {
  sm: { width: 16, height: 8, fontSize: 0.4, iconSize: 0.6 },
  md: { width: 20, height: 10, fontSize: 0.5, iconSize: 0.8 },
  lg: { width: 24, height: 12, fontSize: 0.6, iconSize: 1 },
} as const;

const TYPE_COLORS: Record<ButtonType, { bg: string; text: string }> = {
  primary: {
    bg: '#3b82f6',
    text: '#ffffff',
  },
  submit: {
    bg: '#22c55e',
    text: '#ffffff',
  },
  cancel: {
    bg: '#ef4444',
    text: '#ffffff',
  },
} as const;

const VARIANT_MODIFIERS: Record<ButtonVariant, (colors: typeof TYPE_COLORS[ButtonType]) => { bg: string; text: string }> = {
  default: (colors) => colors,
  outline: (colors) => ({
    bg: 'transparent',
    text: colors.bg,
  }),
  ghost: (colors) => ({
    bg: 'transparent',
    text: colors.bg,
  }),
} as const;

export function Button({
  children,
  onClick,
  size = 'md',
  variant = 'default',
  type = 'primary',
  disabled = false,
  icon: Icon,
  iconProps = {},
}: ButtonProps) {
  const sizeStyles = BUTTON_SIZES[size];
  const typeColors = TYPE_COLORS[type];
  const colors = VARIANT_MODIFIERS[variant](typeColors);
  const textColor = disabled ? '#9ca3af' : colors.text;

  return (
    <ButtonComponent
      onClick={disabled ? undefined : onClick}
      backgroundColor={colors.bg}
      flexDirection="row"
      gap={2}
      alignItems="center"
      justifyContent="center"
      {...sizeStyles}
    >
      {Icon && (
        <Icon
          {...iconProps}
          color={textColor}
          width={sizeStyles.iconSize * 20}
          height={sizeStyles.iconSize * 20}
          text=""
        />
      )}
      {typeof children === 'string' && (
        <Text
          color={textColor}
          fontSize={sizeStyles.fontSize}
        >
          {children}
        </Text>
      )}
    </ButtonComponent>
  );
}
