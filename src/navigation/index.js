import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import { AppContext } from "../../AppContext";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { user } = useContext(AppContext);

  return (
    <Stack.Navigator initialRouteName={user.isAuth ? "HomeTabs" : "Login"}>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
