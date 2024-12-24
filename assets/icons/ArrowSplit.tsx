import Svg, { Path } from "react-native-svg"
import { IconProps } from "@/types/type"

const ArrowSplit = ({ size, fill }: IconProps) => {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      fill={fill ? fill : "#ffffff"}
      viewBox="0 -960 960 960"
    >
      <Path d="M200-460v-40h271.69l220-220H560v-40h200v200h-40v-131.69L488.31-460H200Zm360 260v-40h131.69L537.54-393.69l28.77-28.77L720-268.31V-400h40v200H560Z" />
    </Svg >
  )
}

export default ArrowSplit
