import Svg, { Path } from "react-native-svg"
import { IconProps } from "@/types/type"

const Add = ({ size, fill }: IconProps) => {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      fill={fill ? fill : "#ffffff"}
      viewBox="0 -960 960 960"
    >
      <Path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z" />
    </Svg >
  )
}

export default Add
