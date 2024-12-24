import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { CustomButtonProps } from "@/types/type";

// TODO: Add icon

const HeroButton = ({ label, Icon, onPress, additionalStyle }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={["#FF405D", "#E45593"]} style={{ borderRadius: 10 }} end={[1, 0.5]} className={`${additionalStyle} p-4`}>
        {Icon && <Icon />}
        <Text className="text-center font-Lexend text-sm-half text-white">{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HeroButton;
