import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: "#1e1d20"
      }
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
