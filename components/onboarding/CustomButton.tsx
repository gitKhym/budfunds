import { Text, TouchableOpacity, Image } from "react-native"

import { CustomButtonProps } from "@/types/type";

const CustomButton = ({ label, Icon, image, onPress, additionalStyle }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${additionalStyle} flex-row items-center justify-center gap-4  rounded-square bg-grey-800 p-4`}>
      {Icon &&
        <Icon />
      }

      {image &&
        <Image source={image} className="h-12 w-12" />
      }

      {label &&
        <Text className="font-Lexend text-sm-half text-white">{label}</Text>
      }
    </TouchableOpacity>
  )
}
export default CustomButton;
