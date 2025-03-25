
import { Stack } from "expo-router";
import { CreateSplitDataProvider } from "@/context/splitContext/createSplitContext";
import { GroupDetailsDataProvider } from "@/context/splitContext/groupDetailsProvider";
import { GroupParticipantsProvider } from "@/context/splitContext/groupParticipantsProvider";
import { ChosenUsersProvider } from "@/context/splitContext/chosenUsersProvider";
const Layout = () => {
  return (
    <CreateSplitDataProvider>
      <GroupDetailsDataProvider>
        <GroupParticipantsProvider>
          <ChosenUsersProvider>
            <Stack
              screenOptions={{
                contentStyle: {
                  backgroundColor: "#1e1d20"
                },
                animation: "slide_from_bottom"
              }}
            >
              <Stack.Screen name="index" options={{ headerShown: false }}
              />
              <Stack.Screen name="create" options={{ headerShown: false }} />
            </Stack>
          </ChosenUsersProvider>
        </GroupParticipantsProvider>
      </GroupDetailsDataProvider>
    </CreateSplitDataProvider>

  );
}

export default Layout;
