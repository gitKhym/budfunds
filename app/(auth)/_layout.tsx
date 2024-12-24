import { Stack, Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo'

const Layout = () => {

  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }

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
