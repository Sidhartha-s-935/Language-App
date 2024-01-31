import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LearnPage = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 15,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("Hiragana")}
        style={buttonStyle}
      >
        <Text style={buttonTextStyle}>Hiragana</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Katakana")}
        style={buttonStyle}
      >
        <Text style={buttonTextStyle}>Katakana</Text>
      </Pressable>
    </View>
  );
};

const buttonStyle = {
  backgroundColor: "#3498db",
  padding: 50,
  margin: 12,
  borderRadius: 25,
};

const buttonTextStyle = {
  color: "#ffffff",
  fontSize: 20,
};

export default LearnPage;
