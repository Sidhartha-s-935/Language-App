import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import FriendsScreen from "./screens/FriendsScreen";
import ChatsScreen from "./screens/ChatsScreen";
import ChatMessagesScreen from "./screens/ChatMessagesScreen";
import LearnPage from "./screens/LearnPage";
import Hiragana from "./screens/Hiragana";
import Katakana from "./screens/Katakana";
import VariantsInfoPage from "./screens/Variants";
import KanjiPage from "./screens/Kanji";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Friends" component={FriendsScreen} />

        <Stack.Screen name="Chats" component={ChatsScreen} />

        <Stack.Screen name="Messages" component={ChatMessagesScreen} />

        <Stack.Screen name="Learn" component={LearnPage} />
        <Stack.Screen name="Hiragana" component={Hiragana} />
        <Stack.Screen name="Katakana" component={Katakana} />
        <Stack.Screen name="Variants" component={VariantsInfoPage} />
        <Stack.Screen name="Kanji" component={KanjiPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
