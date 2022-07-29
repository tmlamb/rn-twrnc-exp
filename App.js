import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import tw, {useAppColorScheme, useDeviceContext} from "twrnc";
import Layout from "./components/Layout";
import About from "./screens/About";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw);
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  return (
    <Layout>
      {/* navigation container */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>

    // <Layout>
    //   {/* <TouchableOpacity onPress={toggleColorScheme}>
    //     <Text style={tw`py-2 px-3 bg-blue-400 dark:bg-gray-800
    //     text-black dark:text-white rounded`}>Switch Color Scheme</Text>
    //   </TouchableOpacity> */}
    //   {/* <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home">
    //       <Stack.Screen name="Home" component={Home} />
    //       <Stack.Screen name="About" component={About} />
    //     </Stack.Navigator>
    //   </NavigationContainer> */}
    // </Layout>
  );
}
