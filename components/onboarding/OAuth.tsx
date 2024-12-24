import { View, Alert } from "react-native"
import CustomButton from "./CustomButton"
import { icons } from "@/constants"
import { useOAuth } from "@clerk/clerk-expo"
import { useCallback } from "react"
import { router } from "expo-router"

import { googleOAuth } from "@/lib/auth"
const OAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })


  const onGooglePress = useCallback(async () => {
    try {
      const res = await googleOAuth(startOAuthFlow)
      if (res.code === 'session_exists') {
        Alert.alert('Success', 'Session exists.')
        router.push("/(root)/(tabs)/home")
      }
      Alert.alert(res.success ? "Success" : "Error", res.msg)
    } catch (err) {
      console.error("OAuth error", err)
    }
  }, [])

  return (
    <View className="flex-row items-center justify-center gap-4">
      <CustomButton label="Sign up with Google" Icon={icons.google} onPress={onGooglePress} />
    </View>
  )
}

export default OAuth
