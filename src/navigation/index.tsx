import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthorizedNavigation from "./authorized";
import { stackOptions } from "./options";
import { RootParamList } from "./types";
import UnAuthorizedNavigation from "./unauthorized";

const RootStack = createNativeStackNavigator<RootParamList>();

export default function RootNavigation() {
  const isLogin = true;
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={stackOptions}>
        {isLogin ? (
          <RootStack.Screen
            component={AuthorizedNavigation}
            name="authorized"
          />
        ) : (
          <RootStack.Screen
            component={UnAuthorizedNavigation}
            name="unauthorized"
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
