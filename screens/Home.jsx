/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 15 2022 17:37:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Button, Text, View } from "react-native";
import tw from "twrnc";

const Home = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate("About");
  const [value, setValue] = useState(0)

  useFocusEffect(
    useCallback(() => {
      setValue(v => v + 1)
    }, [])
  )
  return (
    <View key={value} style={tw`flex-1 dark:bg-gray-900`}>
      <Text
        style={tw`m-auto text-center text-black 
        dark:text-white`}
      >
        Home Screen
      </Text>
      <Button title="Go to About" onPress={handleNavigation} />
    </View>
  );
};

export default Home;
