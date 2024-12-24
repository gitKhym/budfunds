import {
  ImageSourcePropType,
  TextInputProps,
  TouchableOpacityProps,
} from "react-native";

declare interface IconProps {
  size: number;
  fill?: string;
}

declare interface TextFieldProps {
  value: string;
  onChangeText: (string) => void;
  label: string;
  Icon: any;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences";
  error?: string;
}

declare interface CustomButtonProps {
  label?: string;
  Icon?: any;
  additionalStyle?: string;
  onPress: () => void | void;
}
