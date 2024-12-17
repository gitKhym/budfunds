import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { icons } from "@/constants";
import { router } from "expo-router";
import TextField from "@/components/onboarding/TextField";
import Separator from "@/components/onboarding/Separator";
import HeroButton from "@/components/onboarding/HeroButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/onboarding/CustomButton";

const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <SafeAreaView className="flex-1 bg-grey-600 px-8 py-6">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/welcome");
        }}
        className="flex w-full items-start pb-6"
      >
        <View className="rounded-full bg-grey-400 p-3.5">
          <Image source={icons.back_arrow} resizeMode="contain" style={{ height: 24, width: 24 }} />
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
              icon={icons.person}
              placeholder="Your username"
              autoCapitalize="none"
            />
            <TextField
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
              label="Email"
              icon={icons.mail}
              placeholder="Your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextField
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
              label="Password"
              icon={icons.lock}
              placeholder="Your password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <TextField
              value={form.confirmPassword}
              onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
              label="Confirm Password"
              icon={icons.lock}
              placeholder="Confirm your password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <HeroButton label="Sign Up" onPress={() => {
            // TODO: On Press to sign up button
          }} additionalStyle="mt-4" />
          <Separator label="Or" />
          <View className="flex-row items-center justify-center gap-4">
            <CustomButton label="Sign up with Google" icon={icons.google} onPress={() => {
              // TODO: OAuth for Google
            }} />
          </View>
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
      </View>
    </SafeAreaView >
  );
};

export default SignUp;
