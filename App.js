import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import UserStore from "./src/store/userStore";
import { AppContext } from "./AppContext";


export default function App() {
  const appData = { user: new UserStore() };
  return (
    <AppContext.Provider value={appData}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
