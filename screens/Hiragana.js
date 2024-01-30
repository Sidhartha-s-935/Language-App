import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const hiraganaCharacters = [
  { id: "1", character: "あ", romaji: "a" },
  { id: "2", character: "い", romaji: "i" },
  { id: "3", character: "う", romaji: "u" },
  { id: "4", character: "え", romaji: "e" },
  { id: "5", character: "お", romaji: "o" },
  { id: "6", character: "か", romaji: "ka" },
  { id: "7", character: "き", romaji: "ki" },
  { id: "8", character: "く", romaji: "ku" },
  { id: "9", character: "け", romaji: "ke" },
  { id: "10", character: "こ", romaji: "ko" },
  { id: "11", character: "さ", romaji: "sa" },
  { id: "12", character: "し", romaji: "shi" },
  { id: "13", character: "す", romaji: "su" },
  { id: "14", character: "せ", romaji: "se" },
  { id: "15", character: "そ", romaji: "so" },
  { id: "16", character: "た", romaji: "ta" },
  { id: "17", character: "ち", romaji: "chi" },
  { id: "18", character: "つ", romaji: "tsu" },
  { id: "19", character: "て", romaji: "te" },
  { id: "20", character: "と", romaji: "to" },
  { id: "21", character: "な", romaji: "na" },
  { id: "22", character: "に", romaji: "ni" },
  { id: "23", character: "ぬ", romaji: "nu" },
  { id: "24", character: "ね", romaji: "ne" },
  { id: "25", character: "の", romaji: "no" },
  { id: "26", character: "は", romaji: "ha" },
  { id: "27", character: "ひ", romaji: "hi" },
  { id: "28", character: "ふ", romaji: "fu" },
  { id: "29", character: "へ", romaji: "he" },
  { id: "30", character: "ほ", romaji: "ho" },
  { id: "31", character: "ま", romaji: "ma" },
  { id: "32", character: "み", romaji: "mi" },
  { id: "33", character: "む", romaji: "mu" },
  { id: "34", character: "め", romaji: "me" },
  { id: "35", character: "も", romaji: "mo" },
  { id: "36", character: "や", romaji: "ya" },
  { id: "37", character: "ゆ", romaji: "yu" },
  { id: "38", character: "よ", romaji: "yo" },
  { id: "39", character: "ら", romaji: "ra" },
  { id: "40", character: "り", romaji: "ri" },
  { id: "41", character: "る", romaji: "ru" },
  { id: "42", character: "れ", romaji: "re" },
  { id: "43", character: "ろ", romaji: "ro" },
  { id: "44", character: "わ", romaji: "wa" },
  { id: "45", character: "を", romaji: "wo" },
  { id: "46", character: "ん", romaji: "n" },
];

const Hiragana = () => {
  const [pressedCharacter, setPressedCharacter] = useState(null);

  const handleCharacterPress = (romaji) => {
    setPressedCharacter(romaji);
  };

  const handleCharacterRelease = () => {
    setPressedCharacter(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hiragana</Text>
      <View style={styles.characterContainer}>
        {hiraganaCharacters.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.characterItem,
              pressedCharacter === item.romaji && styles.pressedCharacter,
            ]}
            onPress={() => handleCharacterPress(item.romaji)}
            onLongPress={handleCharacterRelease}
            onPressOut={handleCharacterRelease}
          >
            <Text style={styles.characterText}>{item.character}</Text>
            {pressedCharacter === item.romaji && (
              <Text style={styles.romajiText}>{item.romaji}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  characterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  characterItem: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#3498db",
  },
  pressedCharacter: {
    backgroundColor: "#2c3e50",
  },
  characterText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  romajiText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default Hiragana;
