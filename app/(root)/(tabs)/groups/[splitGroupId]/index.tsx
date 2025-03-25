import { fetchSplits } from "@/api";
import { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "react-query";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { View, Text, ActivityIndicator, ImageBackground } from "react-native";
import SplitCard from "@/components/splits/SplitCard";
import { SplitInvolvement } from "@/enums";
import { Split, UserProfile } from "@/types/type";
import CardList from "@/components/splits/CardList";
import DateAndCount from "@/components/splits/DateAndCount";
import CustomButton from "@/components/onboarding/CustomButton";
import { icons } from "@/constants";
import { useGroupDetails } from "@/context/splitContext/groupDetailsProvider";
import { useGroupParticipants } from "@/context/splitContext/groupParticipantsProvider";

const Splits = () => {
  const userId = "c334725b-584c-4691-97b9-47242c2cdce7"

  const { setGroupParticipants } = useGroupParticipants()
  const { setGroupDetails } = useGroupDetails()

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    if (isFetched) {
      setRefreshing(false)
    }
  }, []);


  const { groupData } = useLocalSearchParams<{ splitGroupId: string, groupData: string }>();

  const { id, splitGroupName, members, createdAt } = JSON.parse(groupData)

  const { data: splits, isLoading, isFetched, refetch } = useQuery({
    queryFn: () => fetchSplits(userId, id, SplitInvolvement.AUTHORING),
    queryKey: [userId, id],
  });

  useEffect(() => {
    const profiles: UserProfile[] = members.map((member: any) => ({
      ...member.user.profile,
      userId: member.user.id
    }));

    setGroupParticipants(
      profiles.map(profile => ({
        profile,
        amountOwed: 0,
        percentageOwed: 0.0
      }))
    );

    setGroupDetails({ id, groupName: splitGroupName })

  }, [splitGroupName])

  const image = { uri: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg' }

  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-grey-600">
      <ImageBackground
        source={image}
        blurRadius={6.8}
      >
        <View className="flex-col bg-darken-grey-600 p-4 pt-2">
          <Text className="font-Koulen text-2xl text-white">{splitGroupName}</Text>
          <DateAndCount date={createdAt} list={members} />
          <View className="mt-5 h-12 flex-row items-center gap-2">
            <CustomButton
              additionalStyle="bg-primary"
              label="Make a split"
              onPress={() => {
                router.push({
                  pathname: './create/createSplitDetails',
                  params: { groupData }
                },
                  { relativeToDirectory: true })
              }}
            />
            <CustomButton label="View activities" onPress={() => { }} />
            <CustomButton Icon={() => <icons.Person size={25} />} onPress={() => { }} />
          </View>
        </View>
      </ImageBackground>
      <View className="flex-row justify-between p-4">
        <View className="flex-row gap-2">
          <CustomButton
            label="My splits"
            additionalLabelStyle="text-tiny"
            additionalStyle="bg-primary px-4 py-2"
            onPress={() => { }}
          />
          <CustomButton
            label="Shared with me"
            additionalLabelStyle="text-tiny"
            additionalStyle="px-4 py-2"
            onPress={() => { }}
          />
        </View>
        <View className="flex-row gap-2">
          <CustomButton
            additionalLabelStyle="text-tiny"
            additionalStyle="px-4 py-2"
            label="Sort By"
            onPress={() => { }}
          />
          <CustomButton
            additionalLabelStyle="text-tiny"
            additionalStyle="px-4 py-2"
            label="Filter"
            onPress={() => { }}
          />
        </View>
      </View>
      <View className="flex-1 bg-grey-400">
        {isLoading ?
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator
              color="#ff305d"
              size={50}
            />
          </View>
          :
          <CardList
            data={splits.data}
            renderItem={(item: Split) =>
              <SplitCard item={item} involvement={SplitInvolvement.AUTHORING} />
            }
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default Splits

