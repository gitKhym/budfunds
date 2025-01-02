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
  image?: ImageSourcePropType;
  additionalStyle?: string;
  onPress: () => void | void;
}

declare interface Friend extends User {}

declare interface User {
  username: string;
  amountOwed: number;
  activity?: string;
  date?: string;
  isOwed: boolean;
  avatar: string;
}
