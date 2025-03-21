import { Button as ButtonComponent } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { ReactNode, useState } from 'react';
import { 
  BUTTON_SIZES, 
  BUTTON_TYPE_COLORS, 
  BUTTON_VARIANT_MODIFIERS,
  BUTTON_CONTAINER_STYLES,
  COLORS 
} from '../../utils/styles';

type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';
type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonType = 'primary' | 'cancel' | 'submit';

interface IconProps {
  width?: number;
  height?: number;
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
  active?: boolean;
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
  active = false,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const sizeStyles = BUTTON_SIZES[size];
  const typeColors = BUTTON_TYPE_COLORS[type];
  const colors = BUTTON_VARIANT_MODIFIERS[variant](typeColors);
  
  const getColor = () => {
    if (disabled) return COLORS.text.disabled;
    if (active) return colors.hover.text;
    return isHovered ? colors.hover.text : colors.text;
  };

  const getBackgroundColor = () => {
    if (disabled) return `${colors.bg}50`;
    if (active) return colors.hover.bg;
    return isHovered ? colors.hover.bg : colors.bg;
  };

  const iconSize = size === 'icon' ? 16 : (sizeStyles.iconSize * 15);

  return (
    <ButtonComponent
      onClick={disabled ? undefined : onClick}
      backgroundColor={getBackgroundColor()}
      {...BUTTON_CONTAINER_STYLES}
      {...sizeStyles}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {Icon ? (
        <Icon
          {...iconProps}
          color={getColor()}
          width={iconProps.width || iconSize}
          height={iconProps.height || iconSize}
        />
      ) : (
        children ? (
          <Text
            color={getColor()}
            fontSize={sizeStyles.fontSize}
          >
            {children}
          </Text>
        ) : children
      )}
    </ButtonComponent>
  );
}
