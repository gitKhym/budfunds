import Header from "@/components/global/Header"
import TextField from "@/components/onboarding/TextField"
import SplitCreateProgress from "@/components/splitCreate/SplitCreateProgress"
import { View, TextInput } from "react-native"
import { useRef, useState } from "react"
import { icons } from "@/constants"
import CurrencyInput from 'react-native-currency-input';
import CustomButton from "@/components/onboarding/CustomButton"
import { router } from "expo-router"
import { SplitDetails } from "@/types/type"
import { useSplitDetailsContext } from "@/context/splitContext/createSplitContext"

const CreateSplitDetails = () => {

  const { createSplitDetails, setCreateSplitDetails } = useSplitDetailsContext()

  const currencyInputRef = useRef<CurrencyInput>(null)
  const descriptionInputRef = useRef<TextInput>(null)

  const [details, setDetails] = useState<SplitDetails>({
    splitName: createSplitDetails?.splitName || "",
    amountToSplit: createSplitDetails?.amountToSplit || null,
    description: createSplitDetails?.description || "",
  });

  return (
    <View>
      <Header
        title="Create"
        left={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() =>
              router.replace('/(root)/(tabs)/groups')
            }
          />
        }
        right={
          <CustomButton
            Icon={() => <icons.BackArrow size={25} />}
            onPress={() => {
              setCreateSplitDetails(details)
              router.navigate('./createSplitAddUsers')
            }}
          />
        }
      />
      <View className="gap-4 px-4">
        <SplitCreateProgress currStep={1} totalSteps={4} />
        <TextField
          value={details.splitName}
          label="Split Name"
          Icon={() => <icons.Person size={24} />}
          placeholder="Split Name"
          textInputProps={{
            autoCapitalize: "words",
            onChangeText: (value) => setDetails({ ...details, splitName: value }),
            maxLength: 15,
            returnKeyType: "next",
            onSubmitEditing: () => currencyInputRef.current?.focus(),
            blurOnSubmit: false
          }}
        />
        <CurrencyInput
          value={details.amountToSplit}
          onChangeValue={(value) => setDetails({ ...details, amountToSplit: value })}
          delimiter=","
          separator="."
          prefix="$"
          precision={2}
          ref={currencyInputRef}
          renderTextInput={(textInputProps) => <TextField
            label="Amount to Split"
            Icon={() => <icons.Person size={24} />}
            placeholder="0.00"
            textInputProps={{
              ...textInputProps,
              keyboardType: "numeric",
              inputMode: "numeric",
              returnKeyType: "next",
              onSubmitEditing: () => descriptionInputRef.current?.focus(),
              blurOnSubmit: false
            }}
          />}
        />
        <TextField
          value={details.description}
          label="Description"
          Icon={() => <icons.Person size={24} />}
          placeholder="Description"
          ref={descriptionInputRef}
          textInputProps={{
            autoCapitalize: "sentences",
            onChangeText: (value) => setDetails({ ...details, description: value }),
            maxLength: 50,
            returnKeyType: "next",
          }}
        />
      </View>
    </View>
  )
}


export default CreateSplitDetails
