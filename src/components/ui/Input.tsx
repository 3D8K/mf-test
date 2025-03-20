import { Input as InputComponent } from "@react-three/uikit-default";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function Input({ value = "", onChange, placeholder = "Title" }: InputProps) {
  return (
    <InputComponent
      width="100%"
      value={value}
      onValueChange={onChange}
      placeholder={placeholder}
    />
  );
}
