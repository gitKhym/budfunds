import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#232227"
        },
        animation: "fade"
      }}
    >
      <Stack.Screen
        name="createSplitDetails"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="createSplitAddUsers"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="createSplitDecideSplits"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="createSplitSummary"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="success"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}

export default Layout;
