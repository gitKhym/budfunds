import { Text, Image, View, TouchableOpacity } from "react-native"
import { icons } from "@/constants"
import { Participant } from "@/types/type"

type DecideSplitCardProps = {
  user: Participant
}

const DecideSplitCard = ({ user }: DecideSplitCardProps) => {
  const { fname, lname, avatar } = user.profile
  const { percentageOwed, amountOwed } = user

  const formatter = Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
  })


  return (
    <View className="flex flex-row items-center justify-between rounded-square bg-grey-800 p-4">
      <View className="flex flex-grow flex-row gap-4">
        <Image source={{ uri: avatar }} className="h-12 w-12 rounded-full" />
        <Text className="font-Koulen text-xl text-white">{fname} {lname}</Text>
      </View>
      <View className="flex flex-row items-center justify-center gap-2">
        <View className="flex flex-row items-center justify-center gap-2 rounded-square bg-grey-900 px-4 py-2">
          <Text className="font-Lexend text-sm text-primary">{formatter.format(amountOwed)}</Text>
          <Text className="font-Lexend text-sm text-white opacity-50">{percentageOwed}%</Text>
        </View>
        <TouchableOpacity>
          <icons.BackArrow size={16} fill="#ff405d" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DecideSplitCard
