import CustomButton from '@/components/onboarding/CustomButton'
import { SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-expo'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking'
import { fetchAPI } from '@/lib/fetch'
import { fetchIdFromUsername } from '@/lib/fetchId'
import { fetchSplits } from '@/api'
import { SplitInvolvement } from '@/enums'
const Home = () => {

  const { user } = useUser()
  const { signOut } = useClerk()

  const handleSignOut = async () => {
    try {
      await signOut()
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <SafeAreaView className="bg-grey-600">
      <SignedIn>
        <Text className='text-white'>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <CustomButton label="Sign Out" onPress={handleSignOut} additionalStyle='flex-row items-center' />
      </SignedIn>
      <SignedOut>
        <Redirect href="/(auth)/welcome" />
      </SignedOut>
    </SafeAreaView>
  )
}

export default Home;
