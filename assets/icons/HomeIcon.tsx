import Svg, { Path } from "react-native-svg"
import { IconProps } from "@/types/type"

const HomeIcon = ({ size, fill }: IconProps) => {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      fill={fill ? fill : "#ffffff"}
      viewBox="0 -960 960 960"
    >
      <Path d="M200-160v-420l280-211.54L760-580v420H552.31v-255.38H407.69V-160H200Z" />
    </Svg >
  )
}

export default HomeIcon
