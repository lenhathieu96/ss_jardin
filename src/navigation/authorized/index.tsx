import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthorizedParamList } from "@navigation/types";
import DashboardScreen from "@screens/dashboard";

import { stackOptions } from "../options";

const AuthorizedStack = createNativeStackNavigator<AuthorizedParamList>();

export default function AuthorizedNavigation() {
  return (
    <AuthorizedStack.Navigator screenOptions={stackOptions}>
      <AuthorizedStack.Screen component={DashboardScreen} name="dashboard" />
    </AuthorizedStack.Navigator>
  );
}
