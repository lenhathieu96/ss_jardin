import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthorizedNavigation from "./authorized";
import { RootParamList } from "./types";
import UnAuthorizedNavigation from "./unauthorized";

const RootStack = createNativeStackNavigator<RootParamList>();

export default function RootNavigation() {
  const isLogin = true;
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isLogin ? <AuthorizedNavigation /> : <UnAuthorizedNavigation />}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
