import { View, Text } from "react-native"

type HeaderProps = {
  left?: React.ReactNode
  title: string
  right?: React.ReactNode
}

const Header = ({ left, title, right }: HeaderProps) => {
  return (
    <View className="flex flex-row items-center justify-between p-4">
      <View className="h-12 w-12">

        {left}
      </View>
      <Text className="font-Koulen text-2xl text-white">{title}</Text>
      <View className="h-12 w-12">
        {right}
      </View>

    </View>

  )
}

export default Header
