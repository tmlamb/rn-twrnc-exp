/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 15 2022 17:27:21 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import tw from "twrnc";

const data = [
  {
    id: 1,
    title: "First",
  },
  {
    id: 2,
    title: "Second",
  },
  {
    id: 3,
    title: "Third",
  },
];

const Layout = ({ children, style }) => {
  return (
    <View style={tw`flex-1 flex-col dark:bg-gray-800`}>
      <StatusBar />
      {/* <Header toggleColorScheme={toggleColorScheme} /> */}
      <View style={tw.style(style, `flex-1`)}>{children}</View>
    </View>
  );
};

export default Layout;
