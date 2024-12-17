import { Stack } from 'expo-router';

const Layout = () => {

  return (
    <Stack screenOptions={{
      contentStyle: {
        backgroundColor: "#232227"
      }
    }}>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;
