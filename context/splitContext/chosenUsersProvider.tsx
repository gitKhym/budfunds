import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface ChosenUsersContextType {
  chosenUsers: Set<string>
  setChosenUsers: Dispatch<SetStateAction<Set<string>>>;
}

const ChosenUsersContext = createContext<ChosenUsersContextType | undefined>(undefined)

type ChosenUsersContextProviderProps = {
  children: ReactNode
}

export const ChosenUsersProvider = ({ children }: ChosenUsersContextProviderProps) => {
  const [chosenUsers, setChosenUsers] = useState(new Set<string>());

  return (
    <ChosenUsersContext.Provider value={{ chosenUsers, setChosenUsers }}>
      {children}
    </ChosenUsersContext.Provider>
  )
}

export const useChosenUsers = () => {
  const context = useContext(ChosenUsersContext)
  if (context === undefined) {
    throw new Error("useChosenUsers must be used within a ChosenUsersProvider");
  }
  return context
}

