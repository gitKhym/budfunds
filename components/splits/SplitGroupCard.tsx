
import { Text, View } from "react-native"
import { format } from "date-fns"
import { SplitGroup } from "@prisma/client";
import { Link } from "expo-router";

const SplitGroupCard = ({ item }: { item: SplitGroup }) => {

  const { splitGroupName, id, createdAt } = item

  return (
    <Link
      href={{
        pathname: `/(root)/(tabs)/groups/[splitGroupId]`,
        params: { splitGroupId: id, groupData: JSON.stringify(item) },
      }}
      className="w-full flex-row items-center justify-between rounded-square bg-grey-600 px-4 py-6">
      <View className="flex-col">
        <Text className="font-Koulen text-xl text-white">{splitGroupName}</Text>
        <Text className="font-Lexend text-sm text-white opacity-25">{format(createdAt, "MMMM d, yyyy")}</Text>
      </View>
    </Link>
  )
}

export default SplitGroupCard
