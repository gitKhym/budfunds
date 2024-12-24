import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, TextInput, Image, KeyboardTypeOptions, ImageSourcePropType, Platform, Keyboard } from "react-native";
import { icons } from "@/constants";

import { TextFieldProps } from "@/types/type";
// TODO: Add show secureTextEntry eyeball thing


const TextField = (
  {
    value,
    onChangeText,
    label,
    Icon,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'sentences',
    error,
  }: TextFieldProps
) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className="mb-3 font-Lexend text-sm-half text-white">{label}</Text>
          <View className={`${error ? "border border-b-primary border-l-grey-600 border-r-grey-600 border-t-grey-600" : ""} relative flex flex-row items-center justify-start rounded-square border-b-primary bg-grey-800 pl-3 font-Lexend`} >
            {Icon && <Icon />}

            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              className="w-full p-4 text-white placeholder:text-grey-200" />
          </View>
          {error &&
            <Text className="mt-2 font-Lexend text-sm text-primary">{error}</Text>
          }
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
}

export default TextField;
