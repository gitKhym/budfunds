import { Stack } from 'expo-router';
import "../global.css";
import { useFonts } from "expo-font";

import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from '@/cache';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}


const Layout = () => {

  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand.ttf"),
    Lexend: require("../assets/fonts/Lexend.ttf"),
    Koulen: require("../assets/fonts/Koulen.ttf")
  });


  if (!loaded) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <QueryClientProvider client={queryClient}>
          <StatusBar />
          <Stack screenOptions={{
            contentStyle: {
              backgroundColor: "#232227"
            }
          }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryClientProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

export default Layout;
