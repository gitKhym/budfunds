import { Text, View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { icons } from "@/constants";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { LinearGradient } from 'expo-linear-gradient';
import TabBar from "@/components/global/TabBar";


const BarTab = ({ Icon, label, focused }: { Icon: any, label?: string | undefined | null, focused: boolean }) => {
  return (
    <View className="h-24 w-24 flex-col items-center justify-center">
      <Icon />
      <Text className={`${focused ? "text-primary" : "text-white"} font-Lexend `}>{label}</Text>
    </View>
  )
}

const AddButton = ({ Icon, }: { Icon: any }) => {
  return (
    <View className="flex-col items-center justify-center">
      <LinearGradient colors={["#FF405D", "#E45593"]} style={{ borderRadius: 10 }} end={[1, 0.5]}>
        <Icon />
      </LinearGradient>
    </View>
  )
}

const Layout = () => {

  const { user } = useUser()

  return (
    <>

      <SignedIn>
        <Tabs
          tabBar={({ state, descriptors, navigation, insets }) => <TabBar state={state} descriptors={descriptors} navigation={navigation} insets={insets} />}>
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              headerShown: false
            }}
          />
          <Tabs.Screen
            name="friends"
            options={{
              title: "Friends",
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="add"
            options={{
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="splits"
            options={{
              title: "Splits",
              headerShown: false,
            }}
          />

          <Tabs.Screen
            name="debug"
            options={{
              headerShown: false,
              title: "Debug",
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              headerShown: false,
              title: "Profile",
            }}
          />
        </Tabs>
      </SignedIn>
      <SignedOut>
        <Redirect href="/(auth)/sign-in" />
      </SignedOut>
    </>
  );
}

export default Layout;

