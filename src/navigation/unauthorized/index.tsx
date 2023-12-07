import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UnAuthorizedParamList } from "@navigation/types";
import LoginScreen from "@screens/login";

import { stackOptions } from "../options";

const UnAuthorizedStack = createNativeStackNavigator<UnAuthorizedParamList>();

export default function UnAuthorizedNavigation() {
  return (
    <UnAuthorizedStack.Navigator screenOptions={stackOptions}>
      <UnAuthorizedStack.Screen component={LoginScreen} name="login" />
    </UnAuthorizedStack.Navigator>
  );
}
