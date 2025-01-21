import { StyleSheet, Text, View } from "react-native"
import { format } from "date-fns"
import { Split } from "@/types/type";
import { Link } from "expo-router";
import { SplitInvolvement } from "@/enums";
import Progress from "./Progress";
import BgGradient from "./BgGradient";

import { memo } from "react";
import DateAndCount from "./DateAndCount";
import DropShadow from "react-native-drop-shadow";

const SplitCard = ({
  item,
  involvement,
}: { item: Split; involvement: SplitInvolvement }) => {

  const {
    splitName,
    isSettled,
    createdAt,
    participants,
    author: { amountOwed },
  } = item;

  const image = { uri: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg' }

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const formattedAmount = currency.format((amountOwed || 0) / 100);
  return (
    <Link
      href={`/(root)/(tabs)/groups/test`}
      className="w-full flex-row items-center justify-between rounded-square bg-grey-600 drop-shadow-lg"
    >
      <BgGradient image={image}>
        <View className="w-full flex-col px-6 pb-10 pt-3">
          <View className="flex-col">
            <View className="w-full flex-row justify-between">
              <Text className="overflow-visible font-Koulen text-2xl  text-white">{splitName}</Text>
              <View className="flex-col items-end justify-center">
                <Text className="font-sm font-Lexend text-tiny leading-none text-grey-200">You're Owed</Text>
                <Text className="font-Lexend text-lg leading-snug text-bf-green">{formattedAmount}</Text>
              </View>
            </View>
            <Text className="font-Lexend text-sm leading-none text-white">Created by You</Text>
          </View>
          <View className="w-full flex-row items-end justify-between">
            <DateAndCount date={createdAt} list={participants} />
            <Progress participants={participants} isSettled={isSettled} />
          </View>
        </View>
      </BgGradient>
    </Link >
  )
}
export default memo(SplitCard)
