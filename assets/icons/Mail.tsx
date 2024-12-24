import Svg, { Path } from "react-native-svg"
import { IconProps } from "@/types/type"

const Mail = ({ size, fill }: IconProps) => {
  return (
    <Svg
      height={`${size}px`}
      width={`${size}px`}
      fill={fill ? fill : "#ffffff"}
      viewBox="0 -960 960 960"
    >
      <Path d="M184.62-200q-27.62 0-46.12-18.5Q120-237 120-264.62v-430.76q0-27.62 18.5-46.12Q157-760 184.62-760h590.76q27.62 0 46.12 18.5Q840-723 840-695.38v430.76q0 27.62-18.5 46.12Q803-200 775.38-200H184.62ZM480-475.38l320-209.24L787.69-720 480-520 172.31-720 160-684.62l320 209.24Z" />
    </Svg >
  )
}

export default Mail
