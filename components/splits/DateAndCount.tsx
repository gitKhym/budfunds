import { Text } from "react-native";
import { format } from "date-fns";

type DateAndCountProps = {
  date: Date | string | number;
  list: {}[]
}
const DateAndCount = ({ date, list }: DateAndCountProps) => {
  const countLabel = `${list.length} ${list.length === 1 ? "Person" : "People"}`
  return (
    <Text className="font-Lexend leading-none text-grey-200">{format(date, "MMMM d, yyyy")} · <Text className="text-grey-100">{countLabel} </Text></Text>
  )
}

export default DateAndCount
