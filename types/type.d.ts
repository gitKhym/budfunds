import {
  ImageSourcePropType,
  TextInputProps,
  TouchableOpacityProps,
} from "react-native";

declare module "react-native-switch-selector" {
  import { Component } from "react";
  import { ViewStyle, TextStyle } from "react-native";

  interface SwitchSelectorProps {
    options: { label: string; value: string | number }[];
    initial: number;
    onPress: (value: string | number) => void;
    textColor?: string;
    selectedColor?: string;
    borderColor?: string;
    height?: number;
    hasPadding?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    selectedTextStyle?: TextStyle;
    buttonTextStyle?: TextStyle;
  }

  export default class SwitchSelector extends Component<SwitchSelectorProps> {}
}

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
  to?: string;
  params?: object;
  Icon?: React.ElementType;
  image?: ImageSourcePropType;
  additionalStyle?: Falsy | ViewStyle;
  additionalLabelStyle?: Falsy | TextStyle;
  onPress: () => void | void;
}

declare interface User {
  username: string;
  amountOwed: number;
  activity?: string;
  date?: string;
  isOwed: boolean;
  avatar: string;
}

declare interface Friend extends User {}

declare interface SplitGroup {
  createdAt: string;
  id: string;
  role: string;
  splitGroup: {
    id: string;
    splitGroupName: string;
    createdAt: string;
    updatedAt: string;
    members: Array<{
      [key: string]: any;
    }>;
  };
  splitGroupId: string;
  updatedAt: string;
  userId: string;
}

declare interface Split {
  createdAt: Date;
  updatedAt: Date;
  id: string;
  splitName: string;
  isSettled: boolean;
  participants: Object[];
  author: {
    amountOwed: number;
    isSettled: boolean;
  };
}
