import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Destination from "./Screens/Destination";
import RecommondedPlaces from "./Screens/RecommondedPlaces";
import StartingPoint from "./Screens/StartingPoint";
import Planshower from "./Screens/Planshower";

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:"",headerShown:false}} component={Home}/>
        <Stack.Screen options={{title:"",headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            borderWidth: 0,
            shadowColor: 'white',
            elevation: 0,
          }}}name="Destination" component={Destination}/>
        <Stack.Screen name="reco" options={{title:"Near By Places"}} component={RecommondedPlaces}/>
        <Stack.Screen name="startinfo" options={{title:""}} component={StartingPoint}/>
        <Stack.Screen name="planshower" options={{title:"Travel Plan"}} component={Planshower}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
