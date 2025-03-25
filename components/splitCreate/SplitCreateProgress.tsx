import { Text, View } from "react-native"
import React from 'react'

type ProgressProps = {
  currStep: number
  totalSteps: number
}

const SplitCreateProgress = ({ currStep, totalSteps }: ProgressProps) => {
  return (
    <View className="flex-row items-center justify-between gap-4 rounded-square bg-grey-800 p-4">
      {[...Array(totalSteps)].map((_, i) => (
        <React.Fragment key={i}>
          <Circle content={i + 1} isActive={i === currStep - 1} />
          {i < totalSteps - 1 && <Separator />}
        </React.Fragment>
      ))}
    </View>
  );
}


const Circle = ({ content, isActive }: { content: number | string, isActive: boolean }) => {
  return (
    <View className={`${isActive ? "border-primary" : "border-grey-350"} flex h-10 w-10 items-center justify-center rounded-full border-2 `}>
      <Text className={`${isActive ? "text-primary" : "text-grey-350"} font-Lexend `}>{content}</Text>
    </View>
  )
}
const Separator = () => {
  return (
    <View className="flex-grow border border-grey-350">
    </View>
  )
}

export default SplitCreateProgress
