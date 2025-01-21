import { ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

type BgGradientProps = {
  image: { uri: string }
  children: React.ReactNode
}

const BgGradient = ({ image, children }: BgGradientProps) => {

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      imageStyle={{
        borderRadius: 6,
        width: '45%',
        height: '100%'
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={['#232227ab', '#232227e6', '#232227']}
        locations={[0, 0.25, 0.45]}
        style={{
          flex: 1,
          borderRadius: 6,
          overflow: "hidden"
        }}
      >
        {children}

      </LinearGradient>
    </ImageBackground>
  )
}

export default BgGradient

