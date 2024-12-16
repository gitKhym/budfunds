import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="flex items-center justify-center bg-grey-600">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up")
        }}
        className="flex w-full items-end p-5"
      >
        <Text className="text-md font-Lexend text-white">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome;
