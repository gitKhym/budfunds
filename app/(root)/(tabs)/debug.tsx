import CustomButton from "@/components/onboarding/CustomButton"
import { SafeAreaView } from "react-native-safe-area-context"
import { useQuery } from "react-query"
import axios from "axios"

const fetchUsers = async () => {
  try {
    const res = axios.get('/(api)/users/')
    console.log(res)
    return res
  } catch (error: any) {
    console.error("Error fetching users:", error)
    throw new Error(error)
  }
}


const Debug = () => {

  return (
    <SafeAreaView>
      <CustomButton onPress={fetchUsers} label="Log Users" />
    </SafeAreaView>
  )
}

export default Debug
