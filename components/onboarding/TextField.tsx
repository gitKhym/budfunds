import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, TextInput, Image, KeyboardTypeOptions, ImageSourcePropType, Platform, Keyboard } from "react-native";

import { TextFieldProps } from "@/types/type";
// TODO: Add show secureTextEntry eyeball thing

const TextField = (
  {
    value,
    onChangeText,
    label,
    icon,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'sentences'
  }: TextFieldProps
) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className="text-white mb-3 font-Lexend text-lg">{label}</Text>
          <View className="relative flex flex-row items-center justify-start rounded-square bg-grey-800 font-Lexend ">
            {icon &&
              <Image source={icon} className="ml-4 h-8 w-8" />
            }
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              className="text-white w-full p-4 placeholder:text-grey-200" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
}

export default TextField;
