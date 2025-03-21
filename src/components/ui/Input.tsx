import { Input as InputComponent } from "@react-three/uikit-default";
import { INPUT_STYLES } from "../../utils/styles";

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
