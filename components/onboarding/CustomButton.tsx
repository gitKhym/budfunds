import { Text, TouchableOpacity } from "react-native"

import { CustomButtonProps } from "@/types/type";

const CustomButton = ({ label, Icon, onPress, additionalStyle }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${additionalStyle} flex-row items-center justify-center gap-4  rounded-square bg-grey-800 p-4`}>
      {Icon &&
        <Icon />
      }
      {label &&
        <Text className="font-Lexend text-sm-half text-white">{label}</Text>
      }
    </TouchableOpacity>
  )
}
export default CustomButton;
