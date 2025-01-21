import { Text, View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { icons } from "@/constants";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { LinearGradient } from 'expo-linear-gradient';
import TabBar from "@/components/global/TabBar";


const Layout = () => {

  const { user } = useUser()

  return (
    <>
      <SignedIn>
        <Tabs
          tabBar={({ state, descriptors, navigation, insets }) => <TabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            insets={insets} />
          }

          screenOptions={{
            animation: "shift"
          }}
        >
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
            name="groups"
            options={{
              title: "Splits",
              headerShown: false,
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

