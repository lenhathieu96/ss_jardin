import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UnAuthorizedParamList } from "@navigation/types";
import LoginScreen from "@screens/login";

const UnAuthorizedStack = createNativeStackNavigator<UnAuthorizedParamList>();

export default function UnAuthorizedNavigation() {
  return (
    <UnAuthorizedStack.Navigator>
      <UnAuthorizedStack.Screen component={LoginScreen} name="login" />
    </UnAuthorizedStack.Navigator>
  );
}
