import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#1e1d20"
        },
        animation: "slide_from_bottom",
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[splitGroupId]" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
