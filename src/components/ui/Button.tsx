import { Button as ButtonComponent } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { ReactNode } from 'react';
import { 
  BUTTON_SIZES, 
  BUTTON_TYPE_COLORS, 
  BUTTON_VARIANT_MODIFIERS,
  BUTTON_CONTAINER_STYLES,
  COLORS 
} from '../../utils/styles';

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
  const typeColors = BUTTON_TYPE_COLORS[type];
  const colors = BUTTON_VARIANT_MODIFIERS[variant](typeColors);
  const textColor = disabled ? COLORS.text.disabled : colors.text;

  return (
    <ButtonComponent
      onClick={disabled ? undefined : onClick}
      backgroundColor={colors.bg}
      {...BUTTON_CONTAINER_STYLES}
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
