import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { CustomButtonProps } from "@/types/type";

// TODO: Add icon

const HeroButton = ({ label, Icon, onPress, additionalStyle, additionalLabelStyle }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={["#FF405D", "#E45593"]} style={{ borderRadius: 7 }} end={[1, 0.5]} >
        <View className="p-4">

          {Icon && <Icon />}
          <Text className={`${additionalLabelStyle} text-center font-Lexend text-white`}>{label}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity >
  );
};

export default HeroButton;
