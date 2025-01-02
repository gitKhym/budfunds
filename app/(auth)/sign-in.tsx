import { Text, View, Image, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";
import { icons } from "@/constants";
import TextField from "@/components/onboarding/TextField";
import Separator from "@/components/onboarding/Separator";
import HeroButton from "@/components/onboarding/HeroButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/onboarding/CustomButton";
import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import * as Crypto from 'expo-crypto';

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [form, setForm] = useState({
    email: "",
    password: "",
    hashedPassword: ""
  })

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {

      const digestedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        form.password
      )

      setForm({ ...form, hashedPassword: digestedPassword })

      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: digestedPassword,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(root)/(tabs)/home')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password])

  return (
    <SafeAreaView className="flex-1 bg-grey-600 px-8 py-6">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/welcome");
        }}
        className="flex w-full items-start pb-6"
      >
        <View className="rounded-full bg-grey-400 p-3.5">
          <icons.BackArrow size={32} />
        </View>
      </TouchableOpacity>

      <View className="flex-1">
        <View>
          <Text className="font-Koulen text-2xl text-white">
            Sign in to <Text className="text-primary">BUDFUNDS</Text>
          </Text>
          <TextField
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            label="Email"
            Icon={() => <icons.Mail size={24} />}
            placeholder="Your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextField
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            label="Password"
            Icon={() => <icons.Lock size={24} />}
            placeholder="Your password"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <HeroButton label="Sign In" onPress={onSignInPress} additionalStyle="mt-6" />
        <Separator label="Or" />
        <View className="flex-row items-center justify-center gap-4">
          <CustomButton label="Sign in with Google" image={icons.google} onPress={() => {
            // TODO: OAuth for Google
          }} />
        </View>
      </View>
      <View className="flex-row items-center justify-center">
        <Text className="font-Lexend text-white">Don't have an account yet?</Text>
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
        >
          <Text className="text-md ml-1 font-Lexend text-primary underline">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

export default SignIn;
