import { GroupDetails } from "@/types/type";
import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface GroupDetailsContextType {
  groupDetails: GroupDetails | null;
  setGroupDetails: Dispatch<SetStateAction<GroupDetails | null>>
}

const GroupDetailsContext = createContext<GroupDetailsContextType | undefined>(undefined)

type GroupDetailsContextProviderProps = {
  children: ReactNode;
}
export const GroupDetailsDataProvider = ({ children }: GroupDetailsContextProviderProps) => {
  const [groupDetails, setGroupDetails] = useState<GroupDetails | null>(null)

  return (
    <GroupDetailsContext.Provider value={{ groupDetails, setGroupDetails }}>
      {children}
    </GroupDetailsContext.Provider>
  )
}

export const useGroupDetails = () => {
  const context = useContext(GroupDetailsContext);

  if (context === undefined) {
    throw new Error("useGroupDetailsContext must be used within a GroupDetailsDataProvider");
  }

  return context
}

