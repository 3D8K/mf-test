import { Input as InputComponent } from "@react-three/uikit-default";
import { INPUT_STYLES } from "../../styles";
import { Text } from "@react-three/uikit";
import { Container } from "@react-three/uikit";
import { useMemo } from "react";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  errorMessage?: string;
}

export default function Input({ 
  value = "", 
  onChange, 
  placeholder = "Title",
  maxLength = 10,
  errorMessage = "Maximum 10 characters allowed"
}: InputProps) {
  const showError = useMemo(() => {
    return value.length > maxLength;
  }, [value.length, maxLength]);

  return (
    <Container positionType="relative">
      <InputComponent
        {...INPUT_STYLES}
        value={value}
        onValueChange={onChange}
        placeholder={placeholder}
      />
      {showError && (
        <Text {...INPUT_STYLES.error.text}>
          {errorMessage}
        </Text>
      )}
    </Container>
  );
}
