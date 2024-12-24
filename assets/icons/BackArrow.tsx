import Svg, { Path } from "react-native-svg"
import { IconProps } from "@/types/type"

const BackArrow = ({ size, fill }: IconProps) => {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      fill={fill ? fill : "#ffffff"}
      viewBox="0 -960 960 960"
    >
      <Path d="M640-107.69 267.69-480 640-852.31l42.54 42.54L352.77-480l329.77 329.77L640-107.69Z" />
    </Svg >
  )
}

export default BackArrow
