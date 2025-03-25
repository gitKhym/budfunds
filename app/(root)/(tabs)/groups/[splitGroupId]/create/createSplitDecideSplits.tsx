import { Text, View, FlatList } from "react-native"
import Header from "@/components/global/Header"
import CustomButton from "@/components/onboarding/CustomButton"
import SplitCreateProgress from "@/components/splitCreate/SplitCreateProgress"
import { icons } from "@/constants"
import { router } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { useSplitDetailsContext } from "@/context/splitContext/createSplitContext"
import DecideSplitCard from "@/components/splitCreate/DecideSplitCard"
import { useGroupParticipants } from "@/context/splitContext/groupParticipantsProvider"
import { useChosenUsers } from "@/context/splitContext/chosenUsersProvider"
import { useEffect, useState } from "react"
import { Participant } from "@/types/type"

const CreateSplitDecideSplits = () => {
  const formatter = Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
  })

  const { groupParticipants } = useGroupParticipants()
  const { chosenUsers } = useChosenUsers()
  const { createSplitDetails } = useSplitDetailsContext()

  const { amountToSplit, splitName } = createSplitDetails || {}
  const [participants, setParticipants] = useState<Participant[]>([])
  const [evenSplit, setEvenSplit] = useState("")

  const [formattedCurrency, setFormattedCurrency] = useState("")

  useEffect(() => {
    if (!amountToSplit || chosenUsers.size === 0) return;

    const splitAmount = Math.round((amountToSplit / chosenUsers.size) * 100) / 100;
    const splitPercentage = Math.round((100 / chosenUsers.size));

    setFormattedCurrency(formatter.format(amountToSplit))

    setEvenSplit(formatter.format((splitAmount)))

    const updatedParticipants = groupParticipants!
      .filter(participant => chosenUsers.has(participant.profile.userId))
      .map(participant => ({
        ...participant,
        amountOwed: splitAmount,
        percentageOwed: splitPercentage,
      }));

    setParticipants(updatedParticipants);
  }, [groupParticipants, chosenUsers, amountToSplit]);

  return (
    <View className="flex-1">
      <Header
        title="Determine Splits"
        left={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() => router.navigate('./createSplitAddUsers')}
          />
        }
        right={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() => router.navigate('./createSplitSummary')}
          />
        }
      />

      <View className="flex-1 gap-4 px-4">
        <SplitCreateProgress currStep={3} totalSteps={4} />
        <LinearGradient colors={["#FF405D99", "#222124"]} style={{ borderRadius: 10 }} start={[0.5, 0]} end={[0.5, 0.9]}>
          <View className="jusitfy-center flex w-full flex-col items-center py-6">
            <Text className="font-Lexend text-white opacity-50">Total Split</Text>
            <Text className="font-Lexend  text-2xl text-white">{formattedCurrency}</Text>
            <Text className="font-Lexend  text-primary">{splitName}</Text>
          </View>
        </LinearGradient>
        <View className="flex flex-row justify-between rounded-square bg-grey-800 p-3">
          <View></View>
          <View className="flex flex-row items-center gap-3">
            <Text className="fonx-Lexend text-white opacity-50">{evenSplit} per person</Text>
            <CustomButton
              onPress={() => {
              }}
              label="Equal"
              additionalStyle="bg-primary py-2"
            />
          </View>
        </View>
        <Text className="font-Lexend text-white opacity-50">Participants ({participants.length})</Text>
        <FlatList
          data={participants}
          renderItem={({ item }) => <DecideSplitCard user={item} />}
          ItemSeparatorComponent={() => <View className="h-3" />}
          keyExtractor={(item: Participant) => String(item.profile.userId)}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </View>
  )

}


export default CreateSplitDecideSplits 
