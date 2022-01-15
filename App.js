import Layout from "./components/Layout";
import { useDeviceContext, useAppColorScheme } from 'twrnc';
import Home from "./screens/Home";
import tw from "twrnc"
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./screens/About";
import { Button } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  return (
    <Layout>
      <TouchableOpacity onPress={toggleColorScheme}>
        <Text
          style={tw`bg-gray-200 dark:bg-gray-900 text-black dark:text-white 
                capitalize p-2 mt-24 text-center`}
        >
          toggle theme
        </Text>
      </TouchableOpacity>
      {/* navigation container */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerRight: () => (
            <TouchableOpacity onPress={toggleColorScheme}>
              <Text
                style={tw`bg-gray-200 dark:bg-gray-900 text-black dark:text-white 
                capitalize p-2 rounded`}
              >
                toggle theme
              </Text>
            </TouchableOpacity>
          ),
        }}>
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
