import { ActivityIndicator, FlatList, RefreshControl, View } from "react-native"

type CardListProps<T> = {
  data: T[]
  refreshing: boolean
  onRefresh: () => void
  renderItem: (item: T) => JSX.Element
}

const CardList = <T,>({ data, refreshing, onRefresh, renderItem }: CardListProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => (item as any).id}
      ItemSeparatorComponent={() => <View className="h-3" />}
      className="p-4"
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  )
}

export default CardList
