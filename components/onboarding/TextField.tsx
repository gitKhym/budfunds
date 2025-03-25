import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import { forwardRef } from "react";

import { TextFieldProps } from "@/types/type";

const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ value, label, Icon, placeholder, error, textInputProps }, ref) => {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="my-2 w-full">
            {label && <Text className="mb-3 font-Lexend text-sm-half text-white">{label}</Text>}
            <View
              className={`${error
                ? "border border-b-primary border-l-grey-600 border-r-grey-600 border-t-grey-600"
                : ""
                } relative flex flex-row items-center justify-start rounded-square border-b-primary bg-grey-800 pl-3 font-Lexend`}
            >
              {Icon && <Icon />}
              <TextInput
                ref={ref}
                value={value}
                placeholder={placeholder}
                className="w-full p-4 text-white placeholder:text-grey-200"
                {...textInputProps}
              />
            </View>
            {error && <Text className="mt-2 font-Lexend text-sm text-primary">{error}</Text>}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
);

export default TextField;
