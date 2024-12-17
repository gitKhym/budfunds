import {
  ImageSourcePropType,
  TextInputProps,
  TouchableOpacityProps,
} from "react-native";

declare interface TextFieldProps {
  value: string;
  onChangeText: (string) => void;
  label: string;
  icon: ImageSourcePropType;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences";
}

declare interface CustomButtonProps {
  label?: string;
  icon?: ImageSourcePropType;
  additionalStyle?: string;
  onPress: () => void;
}
