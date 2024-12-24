import Svg, { Path } from "react-native-svg"
import { IconProps } from "@/types/type"

const Lock = ({ size, fill }: IconProps) => {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      fill={fill ? fill : "#ffffff"}
      viewBox="0 -960 960 960"
    >
      <Path d="M264.62-120q-26.66 0-45.64-18.98T200-184.62v-350.76q0-26.66 18.98-45.64T264.62-600H320v-80q0-66.85 46.58-113.42Q413.15-840 480-840t113.42 46.58Q640-746.85 640-680v80h55.38q26.66 0 45.64 18.98T760-535.38v350.76q0 26.66-18.98 45.64T695.38-120H264.62ZM480-300q25.31 0 42.65-17.35Q540-334.69 540-360t-17.35-42.65Q505.31-420 480-420t-42.65 17.35Q420-385.31 420-360t17.35 42.65Q454.69-300 480-300ZM360-600h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
    </Svg >
  )
}

export default Lock
