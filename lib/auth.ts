import {
  StartOAuthFlowParams,
  StartOAuthFlowReturnType,
} from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
export const googleOAuth = async (
  startOAuthFlow: (
    startOAuthFlowParams?: StartOAuthFlowParams,
  ) => Promise<StartOAuthFlowReturnType>,
) => {
  try {
    const { createdSessionId, signUp, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/(root)/(tabs)/home"),
    });
    if (createdSessionId) {
      if (setActive) {
        setActive!({ session: createdSessionId });
        if (signUp?.createdUserId) {
          // Create db user
          return {
            success: true,
            code: "success",
            msg: "You have successfully authenticated",
          };
        }
      }
    }
    return {
      success: false,
      code: "fail",
      msg: "An error occurred",
    };
  } catch (error: any) {
    console.log(error);

    return {
      success: false,
      code: "fail",
      msg: error?.errors[0]?.longMessage,
    };
  }
};
