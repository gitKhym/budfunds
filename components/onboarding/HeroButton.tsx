import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { ButtonProps } from "@/types/type";

// TODO: Add icon

const HeroButton = ({ label, icon, onPress, additionalStyle }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={["#FF405D", "#E45593"]} style={{ borderRadius: 10 }} end={[1, 0.5]} className={`${additionalStyle} p-4`}>

        <Text className="text-center font-Lexend text-lg text-white">{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HeroButton;
