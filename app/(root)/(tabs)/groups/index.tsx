import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { RefreshControl, ActivityIndicator } from "react-native";
import SplitGroupCard from "@/components/splits/SplitGroupCard";
import { fetchSplitGroups } from "@/api";
import { useCallback, useState } from "react";

const SplitGroups = () => {

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    if (isFetched) {
      setRefreshing(false)
    }
  }, []);

  const userId = "c334725b-584c-4691-97b9-47242c2cdce7"

  const { data: splitGroups, isLoading, isFetched, refetch } = useQuery({
    queryFn: () => fetchSplitGroups(userId),
    queryKey: [userId]
  });

  return (
    <SafeAreaView className="flex-1 bg-grey-600">
      <View className="flex flex-col items-center justify-between py-3">
        <Text className="font-Koulen text-2xl text-white">Splits</Text>
      </View>
      <View className="bg-grey-400 p-3">
        {isLoading ?
          <ActivityIndicator />
          :
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            data={splitGroups.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SplitGroupCard item={item} />}
            ItemSeparatorComponent={() => <View className="h-3" />}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default SplitGroups;
