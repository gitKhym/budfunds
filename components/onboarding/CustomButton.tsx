import { Image, Text, TouchableOpacity } from "react-native"

import { CustomButtonProps } from "@/types/type";

const CustomButton = ({ label, icon, onPress, additionalStyle }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center gap-4  rounded-square bg-grey-800 p-4">
      {icon &&
        <Image source={icon} className="h-12 w-12" />
      }
      {label &&
        <Text className="font-Lexend text-lg text-white">{label}</Text>
      }
    </TouchableOpacity>
  )
}
export default CustomButton;
