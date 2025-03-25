import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { icons } from "@/constants";
import TextField from "@/components/onboarding/TextField";
import Separator from "@/components/onboarding/Separator";
import HeroButton from "@/components/onboarding/HeroButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/onboarding/CustomButton";
import ReactNativeModal from "react-native-modal"

import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import OAuth from "@/components/onboarding/OAuth";
import * as Crypto from 'expo-crypto';

import { fetchAPI } from "@/lib/fetch";

const SignUp = () => {

  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: ""
  })


  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [hashedPassword, setHashedPassword] = useState("")

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    setVerification({ ...verification, error: "" });

    try {
      // Hash password and input it in on Clerk's signUp
      const digestedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        form.password
      );

      setHashedPassword(digestedPassword)

      await signUp.create({
        username: form.username,
        emailAddress: form.email,
        password: hashedPassword,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setVerification({ ...verification, state: "pending" });
    } catch (err) {
      Alert.alert("Sign Up Failed", err.errors[0].longMessage)
    }
  };


  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code
      })

      if (signUpAttempt.status === 'complete') {

        // CREATE USER
        await fetchAPI('/(api)/users/', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: form.username,
            email: form.email,
            password: hashedPassword,
            clerkId: signUpAttempt.createdUserId
          })
        })

        await setActive({ session: signUpAttempt.createdSessionId })
      } else {
        setVerification({
          ...verification,
          error: "Verification failed.",
          state: "pending"
        })
      }
    } catch (err) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "pending"
      })
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-grey-600 px-8 py-6">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/welcome");
        }}
        className="flex w-full items-start pb-6"
      >
        <View className="rounded-full bg-grey-400 p-3.5">
          <icons.BackArrow size={24} />
        </View>
      </TouchableOpacity>

      <View className="flex-1 justify-between">
        <View>
          <View>
            <Text className="font-Koulen text-2xl text-white">
              CREATE A <Text className="text-primary">BUDFUNDS</Text> ACCOUNT
            </Text>
            <TextField
              value={form.username}
              onChangeText={(value) => setForm({ ...form, username: value })}
              label="Username"
              Icon={() => <icons.Person size={24} />}
              placeholder="Your username"
              textInputProps={{
                autoCapitalize: "none"
              }}
            />
            <TextField
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
              label="Email"
              Icon={() => <icons.Mail size={24} />}
              placeholder="Your email"
              textInputProps={{
                autoCapitalize: "none",
                keyboardType: "email-address"
              }}
            />
            <TextField
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              label="Password"
              Icon={() => <icons.Lock size={24} />}
              placeholder="Your password"
              textInputProps={{
                autoCapitalize: "none",
                secureTextEntry: true
              }}
            />
            <TextField
              value={form.confirmPassword}
              onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
              label="Confirm Password"
              Icon={() => <icons.Lock size={24} />}
              placeholder="Confirm your password"
              textInputProps={{
                autoCapitalize: "none",
                secureTextEntry: true
              }}
            />
          </View>
          <HeroButton label="Sign Up" onPress={onSignUpPress} additionalStyle="mt-4" />
          <Separator label="Or" />
          <OAuth />
        </View>
        <View className="flex-row items-center justify-center">
          <Text className="font-Lexend text-white">Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/sign-in");
            }}
          >
            <Text className="text-md ml-1 font-Lexend text-primary underline">Sign In</Text>
          </TouchableOpacity>
        </View>

        <ReactNativeModal
          isVisible={verification.state === 'pending'}
        >
          <View className="rounded-square bg-grey-600 p-4">
            <Text className="font-Koulen text-2xl text-primary">
              Code sent!
            </Text>
            <Text className="font-Lexend text-xl text-white">
              We've sent a verification code to <Text className="text-primary">{form.email}</Text>
            </Text>
            <TextField
              value={verification.code}
              placeholder="Enter your verification code"
              onChangeText={(value) => {
                setVerification({ ...verification, code: value })
              }}
              label="Code"
              Icon={() => <icons.Lock size={24} />}
              autoCapitalize="none"
              keyboardType="number-pad"
            />
            {verification.error && (
              <Text className="mt-1 font-Lexend text-sm text-primary">
                {verification.error}
              </Text>
            )}
            <HeroButton label="Verify" onPress={onVerifyPress} additionalStyle="mt-4" />
            <CustomButton label="Cancel" onPress={() => setVerification({ ...verification, state: "default" })} additionalStyle="mt-4" />
          </View>
        </ReactNativeModal>
      </View>
    </SafeAreaView >
  );
};

export default SignUp;
