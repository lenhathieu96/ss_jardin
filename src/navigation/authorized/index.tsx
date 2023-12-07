import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthorizedParamList } from "@navigation/types";
import DashboardScreen from "@screens/dashboard";

const AuthorizedStack = createNativeStackNavigator<AuthorizedParamList>();

export default function AuthorizedNavigation() {
  return (
    <AuthorizedStack.Navigator>
      <AuthorizedStack.Screen component={DashboardScreen} name="dashboard" />
    </AuthorizedStack.Navigator>
  );
}
