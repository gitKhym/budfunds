import { Participant } from "@/types/type";
import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface GroupParticipantsContextType {
  groupParticipants: Participant[]
  setGroupParticipants: Dispatch<SetStateAction<Participant[]>>;
}

const GroupParticipantsContext = createContext<GroupParticipantsContextType | undefined>(undefined);

type GroupParticipantsContextProviderProps = {
  children: ReactNode;
};

export const GroupParticipantsProvider = ({ children }: GroupParticipantsContextProviderProps) => {
  const [groupParticipants, setGroupParticipants] = useState<Participant[]>([]);

  return (
    <GroupParticipantsContext.Provider value={{ groupParticipants, setGroupParticipants }}>
      {children}
    </GroupParticipantsContext.Provider>
  );
};

export const useGroupParticipants = () => {
  const context = useContext(GroupParticipantsContext);

  if (context === undefined) {
    throw new Error("useGroupParticipants must be used within a GroupParticipantsDataProvider");
  }

  return context;
};
