import { Text, View, Image, TouchableOpacity } from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import TextField from "@/components/onboarding/field";

const SignUp = () => {
  return (
    <SafeAreaView className="flex justify-center bg-grey-600 px-8">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/welcome")
        }}
        className="flex w-full items-start py-6"
      >
        <View className="rounded-full bg-grey-400 p-3.5">
          <Image source={icons.back_arrow} resizeMode="contain" className="h-6 w-6" />
        </View>
      </TouchableOpacity>
      <View>
        <Text className="font-Koulen text-2xl text-white">CREATE A <Text className="text-primary">BUDFUNDS</Text> ACCOUNT</Text>
        <TextField
          label="Email"
          icon={icons.mail}
          placeholder="Your email"
          keyboardType="email-address"
          autoCapitalize="none" />
        <TextField
          label="Password"
          icon={icons.lock}
          placeholder="Your password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextField
          label="Confirm Password"
          icon={icons.lock}
          placeholder="Confirm your password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUp;
