export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'outline' | 'ghost';
export type ButtonType = 'primary' | 'cancel' | 'submit';

export interface IconProps {
  width: number;
  height: number;
  text: string;
  color?: string;
}

export interface StyleProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  marginTop?: number;
  padding?: number;
  gap?: number;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  borderRadius?: number;
  overflow?: 'hidden' | 'scroll' | 'visible';
} 