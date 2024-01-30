import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const katakanaCharacters = [
  { id: "1", character: "ア", romaji: "a" },
  { id: "2", character: "イ", romaji: "i" },
  { id: "3", character: "ウ", romaji: "u" },
  { id: "4", character: "エ", romaji: "e" },
  { id: "5", character: "オ", romaji: "o" },
  { id: "6", character: "カ", romaji: "ka" },
  { id: "7", character: "キ", romaji: "ki" },
  { id: "8", character: "ク", romaji: "ku" },
  { id: "9", character: "ケ", romaji: "ke" },
  { id: "10", character: "コ", romaji: "ko" },
  { id: "11", character: "サ", romaji: "sa" },
  { id: "12", character: "シ", romaji: "shi" },
  { id: "13", character: "ス", romaji: "su" },
  { id: "14", character: "セ", romaji: "se" },
  { id: "15", character: "ソ", romaji: "so" },
  { id: "16", character: "タ", romaji: "ta" },
  { id: "17", character: "チ", romaji: "chi" },
  { id: "18", character: "ツ", romaji: "tsu" },
  { id: "19", character: "テ", romaji: "te" },
  { id: "20", character: "ト", romaji: "to" },
  { id: "21", character: "ナ", romaji: "na" },
  { id: "22", character: "ニ", romaji: "ni" },
  { id: "23", character: "ヌ", romaji: "nu" },
  { id: "24", character: "ネ", romaji: "ne" },
  { id: "25", character: "ノ", romaji: "no" },
  { id: "26", character: "ハ", romaji: "ha" },
  { id: "27", character: "ヒ", romaji: "hi" },
  { id: "28", character: "フ", romaji: "fu" },
  { id: "29", character: "ヘ", romaji: "he" },
  { id: "30", character: "ホ", romaji: "ho" },
  { id: "31", character: "マ", romaji: "ma" },
  { id: "32", character: "ミ", romaji: "mi" },
  { id: "33", character: "ム", romaji: "mu" },
  { id: "34", character: "メ", romaji: "me" },
  { id: "35", character: "モ", romaji: "mo" },
  { id: "36", character: "ヤ", romaji: "ya" },
  { id: "37", character: "ユ", romaji: "yu" },
  { id: "38", character: "ヨ", romaji: "yo" },
  { id: "39", character: "ラ", romaji: "ra" },
  { id: "40", character: "リ", romaji: "ri" },
  { id: "41", character: "ル", romaji: "ru" },
  { id: "42", character: "レ", romaji: "re" },
  { id: "43", character: "ロ", romaji: "ro" },
  { id: "44", character: "ワ", romaji: "wa" },
  { id: "45", character: "ヲ", romaji: "wo" },
  { id: "46", character: "ン", romaji: "n" },
];

const Katakana = () => {
  const [pressedCharacter, setPressedCharacter] = useState(null);

  const handleCharacterPress = (romaji) => {
    setPressedCharacter(romaji);
  };

  const handleCharacterRelease = () => {
    setPressedCharacter(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Katakana</Text>
      <View style={styles.characterContainer}>
        {katakanaCharacters.map((item) => (
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

export default Katakana;
