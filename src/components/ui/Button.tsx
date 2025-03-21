import { Button as ButtonComponent } from '@react-three/uikit-default';
import { Text } from '@react-three/uikit';
import { ReactNode, useState, useMemo, useCallback, memo } from 'react';
import { BUTTON_STYLES, COLORS } from '../../styles';

type ButtonSize = 'sm' | 'md' | 'lg' | 'icon' | 'modal';
type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonType = 'primary' | 'cancel' | 'submit';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

interface ButtonContainerStyles {
  flexDirection?: 'row';
  gap?: number;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  padding?: number;
  cursor?: 'pointer';
  transition?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
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
  containerStyles?: ButtonContainerStyles;
}

const DEFAULT_CONTAINER_STYLES = BUTTON_STYLES.container.default;

const getButtonColors = (
  type: ButtonType,
  variant: ButtonVariant,
  disabled: boolean,
  active: boolean,
  isHovered: boolean
) => {
  const typeColors = BUTTON_STYLES.typeColors[type];
  const colors = BUTTON_STYLES.variants[variant](typeColors);

  return {
    text: disabled 
      ? COLORS.text.disabled 
      : active 
        ? colors.hover.text 
        : isHovered 
          ? colors.hover.text 
          : colors.text,
    background: disabled 
      ? "#e5e7eb" 
      : active 
        ? colors.hover.bg 
        : isHovered 
          ? colors.hover.bg 
          : colors.bg
  };
};

export const Button = memo(function Button({
  children,
  onClick,
  size = 'md',
  variant = 'default',
  type = 'primary',
  disabled = false,
  icon: Icon,
  iconProps = {},
  active = false,
  containerStyles,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeStyles = useMemo(() => BUTTON_STYLES.sizes[size], [size]);
  const colors = useMemo(() => 
    getButtonColors(type, variant, disabled, active, isHovered),
    [type, variant, disabled, active, isHovered]
  );
  
  const iconSize = useMemo(() => 
    size === 'icon' ? 16 : (sizeStyles.iconSize * 15),
    [size, sizeStyles.iconSize]
  );

  const handlePointerEnter = useCallback(() => setIsHovered(true), []);
  const handlePointerLeave = useCallback(() => setIsHovered(false), []);
  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  const containerStyle = useMemo(() => 
    containerStyles || DEFAULT_CONTAINER_STYLES,
    [containerStyles]
  );

  const textStyle = useMemo(() => ({
    color: colors.text,
    fontSize: containerStyles?.fontSize || sizeStyles.fontSize
  }), [colors.text, containerStyles?.fontSize, sizeStyles.fontSize]);

  return (
    <ButtonComponent
      onClick={handleClick}
      backgroundColor={colors.background}
      {...containerStyle}
      {...sizeStyles}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {Icon && (
        <Icon
          {...iconProps}
          color={colors.text}
          width={iconProps.width || iconSize}
          height={iconProps.height || iconSize}
        />
      )}
      {children && (
        <Text {...textStyle}>
          {children}
        </Text>
      )}
    </ButtonComponent>
  );
});
