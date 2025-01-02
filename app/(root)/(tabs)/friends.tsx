import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";
import { fetchAPI } from "@/lib/fetch";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import { Friend } from "@/types/type";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "react-query"


// TODO
enum DebtStatus {
  PAYING_YOU,
  YOUR_PAYING,
  SETTLED
}


const Friends = () => {
  const { user } = useUser()


  if (!user) {
    return <Redirect href="/(auth)/sign-in" />
  }

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

  const [friends, setFriends] = useState<Friend[]>([]);

  const isFocused = useIsFocused();

  const { data, isLoading, error } = useQuery(
    "friends",
    async () => {
      try {
        const res = await fetch(`/(api)/users/${user.username}/`);
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        return res.json()
      } catch (error) {
        console.error(error);
      }
    },
    {
      onError: (error) => {
        console.error(error);
      }
    }
  );

  console.log(data)


  return (
    <SafeAreaView className="bg-grey-600">
      <View className="flex flex-col items-center justify-between py-3">
        <Text className="font-Koulen text-2xl text-white">Friends</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.username}
        renderItem={({ item }) => (
          <FriendCard user={item} />
        )}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator animating={true} />
          ) : (
            <Text className="text-white">No friends found</Text>
          )
        }
        ItemSeparatorComponent={() => <View className="h-4" />}
        className="p-5"
      />
    </SafeAreaView>
  )
}

const FriendCard = ({ user }: { user: Friend }) => {
  const { username, date, activity, avatar, isOwed, amountOwed } = user
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
          <Text className={`${isOwed ? "text-bf-red" : "text-bf-green"} text-s font-Lexendm`}>{formattedAmount}</Text>
        </View>
      </View>
    </Link>
  )
}

export default Friends;
