/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 15 2022 17:49:01 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { View, Text } from "react-native";
import tw from "twrnc";

const About = () => {
  return (
    <View style={tw`flex-1 dark:bg-gray-900`}>
      <Text
        style={tw`m-auto text-center text-black 
        dark:text-white`}
      >
        About Screen
      </Text>
    </View>
  );
};

export default About;
