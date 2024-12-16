import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, TextInput, Image, KeyboardTypeOptions } from "react-native";

type TextFieldProps = {
  label: string;
  icon: any;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences";
}

// TODO: Add show secureTextEntry eyeball thing

const TextField = ({ label, icon, placeholder, secureTextEntry = false, keyboardType = 'default', autoCapitalize = 'sentences' }: TextFieldProps) => {
  return (
    <KeyboardAvoidingView >
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className="mb-3 font-Lexend text-lg text-white">{label}</Text>
          <View className="relative flex flex-row items-center justify-start rounded-square bg-grey-800 font-Lexend ">
            {icon &&
              <Image source={icon} className="ml-4 h-8 w-8" />
            }
            <TextInput placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry} autoCapitalize={autoCapitalize} className="text-white w-full p-4 placeholder:text-grey-200" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  )
}

export default TextField;
