import { Text, TouchableOpacity, Image } from "react-native"

import { CustomButtonProps } from "@/types/type";
import { Link } from "expo-router";

const CustomButton = ({ label, Icon, image, to, params, onPress, additionalStyle, additionalLabelStyle }: CustomButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress} className={`${additionalStyle} flex h-full flex-row items-center justify-center  gap-4 rounded-square bg-grey-800 p-3`}>
      {Icon && <Icon />}
      {image && <Image source={image} className="h-12 w-12" />}
      {label && <Text className={`font-Lexend text-white ${additionalLabelStyle}`}>{label}</Text>}
    </TouchableOpacity>
  )
}
export default CustomButton;
