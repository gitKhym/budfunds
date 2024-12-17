import { View, Text } from "react-native";

type SeparatorProps = {
  label: string;
}

const Separator = ({ label }: SeparatorProps) => {
  return (
    <View className="my-4 flex-row items-center">
      <View className="flex-1 border-t border-gray-400" />
      <Text className="mx-4 font-Lexend text-lg text-gray-400">{label}</Text>
      <View className="flex-1 border-t border-gray-400" />
    </View>
  );
};

export default Separator;
