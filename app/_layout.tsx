import { Stack } from 'expo-router';
import "../global.css";
import { useFonts } from "expo-font";

const Layout = () => {

  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand.ttf"),
    Lexend: require("../assets/fonts/Lexend.ttf"),
    Koulen: require("../assets/fonts/Koulen.ttf")
  });


  if (!loaded) {
    return null;
  }

  return (
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
  );
}

export default Layout;
