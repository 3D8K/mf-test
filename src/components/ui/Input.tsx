import { Input as InputComponent } from "@react-three/uikit-default";

const INPUT_STYLES = {
  width: "100%",
  maxWidth: 600,
  overflow: "hidden",
} as const;

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function Input({ value = "", onChange, placeholder = "Title" }: InputProps) {
  return (
    <InputComponent
      {...INPUT_STYLES}
      value={value}
      onValueChange={onChange}
      placeholder={placeholder}
    />
  );
}
