import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const FriendPage = () => {
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>Username: {username}</Text>
    </View>

  )

}

export default FriendPage;
