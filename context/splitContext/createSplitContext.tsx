import { SplitDetails } from "@/types/type";
import { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

const DEFAULT_SPLIT_DETAILS: SplitDetails = {
  splitName: "",
  description: "",
  amountToSplit: 0,
}

interface CreateSplitDataContextType {
  createSplitDetails: SplitDetails;
  setCreateSplitDetails: Dispatch<SetStateAction<SplitDetails>>;
}

const SplitDetailsContext = createContext<CreateSplitDataContextType | undefined>(undefined);

type CreateSplitContextProviderProps = {
  children: ReactNode;
};

export const CreateSplitDataProvider = ({ children }: CreateSplitContextProviderProps) => {
  const [createSplitDetails, setCreateSplitDetails] = useState<SplitDetails>(DEFAULT_SPLIT_DETAILS);

  return (
    <SplitDetailsContext.Provider value={{ createSplitDetails, setCreateSplitDetails }}>
      {children}
    </SplitDetailsContext.Provider>
  );
};

export const useSplitDetailsContext = () => {
  const context = useContext(SplitDetailsContext);

  if (context === undefined) {
    throw new Error("useSplitDetailsContext must be used within a CreateSplitDataProvider");
  }

  return context;
};
