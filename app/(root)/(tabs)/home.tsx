import CustomButton from '@/components/onboarding/CustomButton'
import { SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-expo'
import { Redirect } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking'
import { fetchAPI } from '@/lib/fetch'
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
        <CustomButton onPress={async () => {

          const uuid = await fetchAPI('/(api)/users/', {
            method: "GET",
          })
          console.log(uuid)
        }}
          label='Log Users'
        />
        <CustomButton onPress={async () => {

          const user = await fetchAPI('/(api)/users/Kayyy2/', {
            method: "GET",
          })
          console.log(user)
        }}
          label='Log Specific user'
        />
        <CustomButton onPress={async () => {
          const uuid = await fetchAPI('/(api)/friends?', {
            method: "POST",
          })
          console.log(uuid)
        }}
          label='Log Specific user'
        />

      </SignedIn>
      <SignedOut>
        <Redirect href="/(auth)/welcome" />
      </SignedOut>
    </SafeAreaView>
  )
}

export default Home;
