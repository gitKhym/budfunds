import { Text, View } from "react-native"
import Header from "@/components/global/Header"
import CustomButton from "@/components/onboarding/CustomButton"
import SplitCreateProgress from "@/components/splitCreate/SplitCreateProgress"
import { icons } from "@/constants"
import { router } from "expo-router"
import { useGroupParticipants } from "@/context/splitContext/groupParticipantsProvider"
import { useChosenUsers } from "@/context/splitContext/chosenUsersProvider"
import { useSplitDetailsContext } from "@/context/splitContext/createSplitContext"
import { useState } from "react"
import { SplitDetails } from "@/types/type"
import { group } from "console"

const CreateSplitSummary = () => {

  const { groupParticipants } = useGroupParticipants()
  const { chosenUsers } = useChosenUsers()
  const { createSplitDetails } = useSplitDetailsContext()

  const { amountToSplit, description, splitName } = createSplitDetails

  return (
    <View>
      <Header
        title="Summary"
        left={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() =>
              router.back()
            }
          />
        }
        right={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() =>
              router.navigate('./success')
            }
          />
        }
      />

      <View className="gap-4 px-4">
        <SplitCreateProgress currStep={4} totalSteps={4} />
        <Text className="font-Lexend text-white">Details</Text>
        <View className="flex  justify-between gap-2 rounded-square bg-grey-800 p-4">
          <Entry left="Split Name" right={splitName} />
          <Entry left="Created By" right="Airplane Tickets" />
          <Entry left="Amount to split" right={`$${String(amountToSplit)}`} />
          <Entry left="Due Date" right="Dec 4th, 2025" />
          <Entry left="Description" right={description} />
        </View>
        <Text className="font-Lexend text-white">Participant details</Text>
        <View className="flex  justify-between gap-2 rounded-square bg-grey-800 p-4">
          <Entry left="Number of Participants" right={String(groupParticipants.length)} />
          <Entry left="Split includes me" right="Yes" />
          <Entry left="Even splits" right="Yes" />
        </View>
      </View>
    </View>
  )
}

const Entry = ({ left, right }: { left: string, right: string }) => {
  return (
    <View className="flex w-full flex-row items-center justify-between">
      <View className="rounded-square bg-grey-900 px-3 py-1">
        <Text className="font-Lexend text-white">{left}</Text>
      </View>
      <Text className="font-Lexend text-white">{right}</Text>
    </View>
  )

}


export default CreateSplitSummary 
