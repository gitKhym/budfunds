import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { icons } from "@/constants"
import { UserProfile } from "@/types/type"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "@/components/global/Header"
import CustomButton from "@/components/onboarding/CustomButton"
import SplitCreateProgress from "@/components/splitCreate/SplitCreateProgress"
import { router } from "expo-router"
import { useGroupDetails } from "@/context/splitContext/groupDetailsProvider"
import { useGroupParticipants } from "@/context/splitContext/groupParticipantsProvider"
import { useChosenUsers } from "@/context/splitContext/chosenUsersProvider"


const CreateSplitAddUsers = () => {

  const { groupDetails } = useGroupDetails()
  const { groupParticipants } = useGroupParticipants()
  const { chosenUsers, setChosenUsers } = useChosenUsers()

  const { groupName } = groupDetails || {}

  const selectUser = (userId: string) => {
    setChosenUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return new Set(newSet);
    });
  };

  return (
    <SafeAreaView className="h-[85%]">
      <Header
        title="Add People"
        left={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() => router.navigate('./createSplitDetails')}
          />
        }

        right={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() => {
              router.navigate('./createSplitDecideSplits')
            }}
          />
        }
      />

      <View className="flex-1 gap-4 px-4">
        <SplitCreateProgress currStep={2} totalSteps={4} />
        <View className="flex flex-row">
          <Text className="font-Lexend text-white opacity-50">Choose people in</Text>
          <Text className="font-Lexend text-primary"> {groupName} </Text>
          <Text className="font-Lexend text-white opacity-50">to split this bill with</Text>
        </View>
        <View className="flex-row justify-between rounded-square bg-grey-800 p-4">
          <UserSelectButton
            user={{ userId: "c334725b-584c-4691-97b9-47242c2cdce7", avatar: "https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", fname: "Khayam", lname: "Alpay" }}
            chosenUserIds={chosenUsers}
            selectUser={() => selectUser("c334725b-584c-4691-97b9-47242c2cdce7")}
            label="Me"
          />
        </View>
        <View className="rounded-square bg-grey-800 p-4">
          <FlatList
            data={groupParticipants}
            numColumns={2}
            key={2}
            renderItem={({ item }) => <UserSelectButton user={item.profile} chosenUserIds={chosenUsers} selectUser={() => selectUser(item.profile.userId)} />}
            columnWrapperStyle={{
              justifyContent: "space-between", gap: 15
            }}
            contentContainerStyle={{
              justifyContent: "space-between", gap: 15, flexGrow: 1
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

type UserSelectButtonProps = {
  user: UserProfile,
  chosenUserIds: Set<string>
  selectUser: (user: UserProfile) => void
  label?: string
}

const UserSelectButton = ({ user, selectUser, chosenUserIds, label }: UserSelectButtonProps) => {
  const { fname, lname, avatar, userId } = user;

  let isSelected = false;
  if (chosenUserIds.has(userId)) {
    isSelected = true
  }

  const buttonStyle = {
    borderWidth: 2,
    borderColor: isSelected ? '#FF405D' : 'transparent',
  };

  return (
    <TouchableOpacity
      className="flex w-[48%] flex-row items-center gap-3 rounded-square bg-grey-600 p-4 "
      activeOpacity={0.6}
      onPress={() => selectUser(user)}
      style={buttonStyle}
    >
      <View className="h-10 w-10">
        <Image source={{ uri: avatar }} className="h-10 w-10 rounded-full" />
      </View>
      <Text className="line-clamp-1 flex-1 truncate font-Lexend text-sm text-white">{label ? label : fname + " " + lname}</Text>
    </TouchableOpacity>
  );
}

export default CreateSplitAddUsers;
