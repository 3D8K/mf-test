import React from 'react';
import { Button as ButtonComponent, ButtonProperties } from '@react-three/uikit-default';
import { Icon, Text, IconProperties } from '@react-three/uikit';

// Определяем типы для пропсов
type ButtonSize = "default" | "sm" | "lg" | "icon";
type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonColor = string;
type ButtonRadius = number | undefined;
type ButtonPadding = number | undefined;

type IconType = React.ElementType<IconProperties>;

interface UniversalButtonProps extends ButtonProperties {
  onClick?: () => void; // Функция нажатия
  icon?: IconType; // Иконка как компонент
  iconProps?: IconProperties; // Пропсы для иконки
  text?: string; // Текст кнопки
  borderRadius?: ButtonRadius; // Закругление углов
  variant?: ButtonVariant; // Вариант кнопки
  color?: string;
}

// Дефолтные значения
const DEFAULT_SIZE: ButtonSize = 'sm';
const DEFAULT_COLOR: ButtonColor = '#edeef1';
const DEFAULT_RADIUS: ButtonRadius = 4;
const DEFAULT_VARIANT: ButtonVariant = 'outline';
const DEFAULT_PADDING: ButtonPadding = 1;

export function Button({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  onClick,
  icon: IconComponent,
  text,
  borderRadius = DEFAULT_RADIUS,
  variant = DEFAULT_VARIANT,
  padding = DEFAULT_PADDING,
  iconProps = {},
  ...props
}: UniversalButtonProps) {
  return (
    <ButtonComponent
      size={size}
      backgroundColor={color}
     width={20}
     height={20}
      borderRadius={borderRadius}
      padding={padding}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {IconComponent && <IconComponent {...iconProps} />}
      {text && <Text>{text}</Text>}
    </ButtonComponent>
  );
}
