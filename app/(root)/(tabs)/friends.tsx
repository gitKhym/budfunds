import { ImageSourcePropType, View, Text, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import { Link } from "expo-router";

interface FriendCardProps {
  username: string
  amountOwed: number,
  activity: string,
  date: string
  avatar: ImageSourcePropType,
  isOwed: boolean
}

// TODO
enum DebtStatus {
  PAYING_YOU,
  YOUR_PAYING,
  SETTLED
}


const Friends = () => {

  const avatar = require('@/assets/images/profilePic1.png');
  const avatar2 = require('@/assets/images/profilePic2.png');
  const avatar3 = require('@/assets/images/profilePic3.png');
  const avatar4 = require('@/assets/images/profilePic4.png');
  const avatar5 = require('@/assets/images/profilePic5.png');
  const friendsData = [
    { username: "Kayyy", amountOwed: 35250, activity: "Has paid $10.00", date: "3 Weeks Ago", isOwed: true, avatar: avatar },
    { username: "Yamnich", amountOwed: 2469, activity: "Lent $24.69", date: "1 Week Ago", isOwed: false, avatar: avatar2 },
    { username: "Grandpa Han", amountOwed: 550, activity: "You lent $5.50", date: "6 Days Ago", isOwed: true, avatar: avatar5 },
    { username: "Lochlan", amountOwed: 0, activity: "Splits settled", date: "2 Days Ago", isOwed: false, avatar: avatar4 },
    { username: "Denzel", amountOwed: 3234, activity: "Has paid $25.55", date: "1 Week Ago", isOwed: false, avatar: avatar3 },
    { username: "Denzel", amountOwed: 3234, activity: "Has paid $25.55", date: "1 Week Ago", isOwed: false, avatar: avatar3 },
    { username: "Denzel", amountOwed: 3234, activity: "Has paid $25.55", date: "1 Week Ago", isOwed: false, avatar: avatar3 },

  ];
  return (
    <SafeAreaView className="bg-grey-600">
      <View className="flex flex-col items-center justify-between py-3">
        <Text className="font-Koulen text-2xl text-white">Friends</Text>
      </View>
      <ScrollView className="bg-grey-400">
        <FlatList
          data={friendsData}
          keyExtractor={(item, index) => `${item.username}-${index}`}
          renderItem={({ item }) => (
            <FriendCard
              username={item.username}
              amountOwed={item.amountOwed}
              activity={item.activity}
              date={item.date}
              isOwed={item.isOwed}
              avatar={item.avatar}
            />
          )}

          ItemSeparatorComponent={() => <View className="h-4" />}
          className="p-5"
        />
      </ScrollView>
    </SafeAreaView>

  )
}

const FriendCard = ({
  username,
  amountOwed,
  activity,
  date,
  avatar,
  isOwed,
}: FriendCardProps) => {
  const oweStatus = `${isOwed ? "You owe" : "Owes you"}`;
  const formattedAmount = `$${(amountOwed / 100).toFixed(2)}`;

  return (
    <Link
      href={{
        pathname: '/friend/[username]',
        params: { username }
      }}
    >
      <View className="w-full flex-row items-center justify-between rounded-square bg-grey-600 px-4 py-6">
        <View className="flex flex-row items-center gap-4">
          <Image source={avatar} className="h-16 w-16 rounded-full" />
          <View className="flex flex-col">
            <Text className="font-Koulen text-xl text-white">{username}</Text>
            <View className="flex flex-row items-center">
              <Text className="font-Lexend text-sm text-white opacity-50">{date} </Text>
              <Text className="font-Lexend text-sm text-white">· {activity}</Text>
            </View>
          </View>
        </View>
        <View className="relative flex flex-col items-end">
          <Text className="font-Lexend text-sm text-white opacity-50">{oweStatus}</Text>
          <Text className={`${isOwed ? "text-bf-red" : "text-bf-green"} font-Lexend text-sm`}>{formattedAmount}</Text>
        </View>
      </View>

    </Link>
  )
}

export default Friends;
