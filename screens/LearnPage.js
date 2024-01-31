import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LearnPage = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
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
      <Pressable
        onPress={() => navigation.navigate("Variants")}
        style={wideButtonStyle}
      >
        <Text style={buttonTextStyle}>Variants of the Letters</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Kanji")}
        style={wideButtonStyle}
      >
        <Text style={buttonTextStyle}>Kanji</Text>
      </Pressable>
    </View>
  );
};

const buttonStyle = {
  backgroundColor: "#3498db",
  padding: 50,
  margin: 10,
  borderRadius: 25,
};

const wideButtonStyle = {
  backgroundColor: "#3498db",
  padding: 50,
  margin: 10,
  borderRadius: 25,
  width: "94%", // Make the button span the entire width
  alignItems: "center",
};

const buttonTextStyle = {
  color: "#ffffff",
  fontSize: 20,
};

export default LearnPage;
