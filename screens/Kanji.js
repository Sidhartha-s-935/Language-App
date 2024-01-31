// KanjiPage.js

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";

const KanjiPage = () => {
  const [selectedKanji, setSelectedKanji] = useState(null);

  const kanjiList = [
    { character: "木", meaning: "tree", hiragana: "き", romaji: "ki" },
    { character: "日", meaning: "sun", hiragana: "にち", romaji: "nichi" },
    { character: "水", meaning: "water", hiragana: "みず", romaji: "mizu" },
    { character: "山", meaning: "mountain", hiragana: "やま", romaji: "yama" },
    { character: "川", meaning: "river", hiragana: "かわ", romaji: "kawa" },
    { character: "犬", meaning: "dog", hiragana: "いぬ", romaji: "inu" },
    { character: "猫", meaning: "cat", hiragana: "ねこ", romaji: "neko" },
    { character: "魚", meaning: "fish", hiragana: "さかな", romaji: "sakana" },
    { character: "鳥", meaning: "bird", hiragana: "とり", romaji: "tori" },
    { character: "花", meaning: "flower", hiragana: "はな", romaji: "hana" },
    { character: "雨", meaning: "rain", hiragana: "あめ", romaji: "ame" },
    { character: "雪", meaning: "snow", hiragana: "ゆき", romaji: "yuki" },
    { character: "月", meaning: "moon", hiragana: "つき", romaji: "tsuki" },
    { character: "星", meaning: "star", hiragana: "ほし", romaji: "hoshi" },
    { character: "火", meaning: "fire", hiragana: "ひ", romaji: "hi" },
    { character: "土", meaning: "earth", hiragana: "つち", romaji: "tsuchi" },
    { character: "金", meaning: "gold", hiragana: "きん", romaji: "kin" },
    { character: "玉", meaning: "ball", hiragana: "たま", romaji: "tama" },
    { character: "人", meaning: "person", hiragana: "ひと", romaji: "hito" },
    { character: "学", meaning: "study", hiragana: "がく", romaji: "gaku" },
    { character: "校", meaning: "school", hiragana: "こう", romaji: "kou" },
    { character: "先", meaning: "ahead", hiragana: "さき", romaji: "saki" },
    { character: "生", meaning: "life", hiragana: "せい", romaji: "sei" },
    { character: "死", meaning: "death", hiragana: "し", romaji: "shi" },
    { character: "白", meaning: "white", hiragana: "しろ", romaji: "shiro" },
    { character: "黒", meaning: "black", hiragana: "くろ", romaji: "kuro" },
    { character: "赤", meaning: "red", hiragana: "あか", romaji: "aka" },
    { character: "青", meaning: "blue", hiragana: "あお", romaji: "ao" },
    { character: "緑", meaning: "green", hiragana: "みどり", romaji: "midori" },
    { character: "黄", meaning: "yellow", hiragana: "き", romaji: "ki" },
    { character: "田", meaning: "rice field", hiragana: "た", romaji: "ta" },
    { character: "町", meaning: "town", hiragana: "まち", romaji: "machi" },
    { character: "国", meaning: "country", hiragana: "くに", romaji: "kuni" },
    { character: "会", meaning: "meeting", hiragana: "かい", romaji: "kai" },
    { character: "社", meaning: "company", hiragana: "しゃ", romaji: "sha" },
    {
      character: "商",
      meaning: "commerce",
      hiragana: "しょう",
      romaji: "shou",
    },
    { character: "道", meaning: "road", hiragana: "みち", romaji: "michi" },
    { character: "車", meaning: "car", hiragana: "くるま", romaji: "kuruma" },
    { character: "電", meaning: "electric", hiragana: "でん", romaji: "den" },
    { character: "語", meaning: "language", hiragana: "ご", romaji: "go" },
    { character: "書", meaning: "write", hiragana: "か", romaji: "ka" },
    { character: "読", meaning: "read", hiragana: "どく", romaji: "doku" },
    { character: "言", meaning: "word", hiragana: "げん", romaji: "gen" },
    { character: "名", meaning: "name", hiragana: "めい", romaji: "mei" },
    { character: "親", meaning: "parent", hiragana: "おや", romaji: "oya" },
    { character: "子", meaning: "child", hiragana: "こ", romaji: "ko" },
    {
      character: "兄",
      meaning: "older brother",
      hiragana: "あに",
      romaji: "ani",
    },
    {
      character: "姉",
      meaning: "older sister",
      hiragana: "あね",
      romaji: "ane",
    },
    {
      character: "妹",
      meaning: "younger sister",
      hiragana: "いもうと",
      romaji: "imouto",
    },
    {
      character: "弟",
      meaning: "younger brother",
      hiragana: "おとうと",
      romaji: "otouto",
    },
    { character: "男", meaning: "man", hiragana: "おとこ", romaji: "otoko" },
    { character: "女", meaning: "woman", hiragana: "おんな", romaji: "onna" },
    { character: "友", meaning: "friend", hiragana: "とも", romaji: "tomo" },
    { character: "飲", meaning: "drink", hiragana: "の", romaji: "no" },
    { character: "食", meaning: "eat", hiragana: "た", romaji: "ta" },
    { character: "飯", meaning: "meal", hiragana: "めし", romaji: "meshi" },
    { character: "飛", meaning: "fly", hiragana: "とぶ", romaji: "tobu" },
    { character: "走", meaning: "run", hiragana: "はしる", romaji: "hashiru" },
    { character: "歩", meaning: "walk", hiragana: "あるく", romaji: "aruku" },
    { character: "立", meaning: "stand", hiragana: "たつ", romaji: "tatsu" },
    { character: "座", meaning: "sit", hiragana: "すわる", romaji: "suwaru" },
    { character: "寝", meaning: "lie down", hiragana: "ねる", romaji: "neru" },
    { character: "見", meaning: "see", hiragana: "みる", romaji: "miru" },
    { character: "聞", meaning: "hear", hiragana: "きく", romaji: "kiku" },
    { character: "話", meaning: "speak", hiragana: "はなす", romaji: "hanasu" },
    { character: "出", meaning: "exit", hiragana: "でる", romaji: "deru" },
    { character: "入", meaning: "enter", hiragana: "はいる", romaji: "hairu" },
    { character: "開", meaning: "open", hiragana: "あける", romaji: "akeru" },
    { character: "閉", meaning: "close", hiragana: "とじる", romaji: "tojiru" },
    { character: "上", meaning: "up", hiragana: "うえ", romaji: "ue" },
    { character: "下", meaning: "down", hiragana: "した", romaji: "shita" },
    { character: "右", meaning: "right", hiragana: "みぎ", romaji: "migi" },
    { character: "左", meaning: "left", hiragana: "ひだり", romaji: "hidari" },
    { character: "中", meaning: "middle", hiragana: "なか", romaji: "naka" },
    { character: "大", meaning: "big", hiragana: "おお", romaji: "oo" },
    {
      character: "小",
      meaning: "small",
      hiragana: "ちいさい",
      romaji: "chiisai",
    },
    { character: "多", meaning: "many", hiragana: "おお", romaji: "oo" },
    {
      character: "少",
      meaning: "few",
      hiragana: "すくない",
      romaji: "sukunai",
    },
    {
      character: "新",
      meaning: "new",
      hiragana: "あたらしい",
      romaji: "atarashii",
    },
    { character: "古", meaning: "old", hiragana: "ふるい", romaji: "furui" },
    { character: "好", meaning: "good", hiragana: "いい", romaji: "ii" },
    { character: "悪", meaning: "bad", hiragana: "わるい", romaji: "warui" },
    { character: "暑", meaning: "hot", hiragana: "あつい", romaji: "atsui" },
    { character: "寒", meaning: "cold", hiragana: "さむい", romaji: "samui" },
    { character: "高", meaning: "tall", hiragana: "たかい", romaji: "takai" },
    { character: "低", meaning: "short", hiragana: "ひくい", romaji: "hikui" },
    { character: "広", meaning: "wide", hiragana: "ひろい", romaji: "hiroi" },
    { character: "狭", meaning: "narrow", hiragana: "せまい", romaji: "semai" },
    {
      character: "短",
      meaning: "short",
      hiragana: "みじかい",
      romaji: "mijikai",
    },
    { character: "長", meaning: "long", hiragana: "ながい", romaji: "nagai" },
    { character: "早", meaning: "early", hiragana: "はやい", romaji: "hayai" },
    { character: "遅", meaning: "late", hiragana: "おそい", romaji: "osoi" },
    {
      character: "易",
      meaning: "easy",
      hiragana: "やさしい",
      romaji: "yasashii",
    },
    {
      character: "難",
      meaning: "difficult",
      hiragana: "むずかしい",
      romaji: "muzukashii",
    },
    { character: "近", meaning: "near", hiragana: "ちかい", romaji: "chikai" },
    { character: "遠", meaning: "far", hiragana: "とおい", romaji: "tooi" },
    { character: "重", meaning: "heavy", hiragana: "おもい", romaji: "omoi" },
    { character: "軽", meaning: "light", hiragana: "かるい", romaji: "karui" },
  ];

  const handleKanjiPress = (kanji) => {
    setSelectedKanji(kanji);
  };

  const closeModal = () => {
    setSelectedKanji(null);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          Diacritic Marks and Variants
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8 }}>
          Tenten (Voiced Marks):
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Tenten, represented by two small strokes ( ゛ ), is used in Japanese
          writing to indicate a voiced sound. It is placed above hiragana or
          katakana characters to change the sound from unvoiced to voiced. For
          example:
          {"\n"} か (ka) with tenten becomes が (ga).
          {"\n"} さ (sa) with tenten becomes ざ (za).
          {"\n"} た (ta) with tenten becomes だ (da).
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8 }}>
          Maru (Circle Mark):
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Maru (◯) is a circle mark used to indicate correctness or affirmation.
          In written Japanese, it is often used to mark correct answers or
          choices. Additionally, it can be applied to hiragana or katakana
          characters for stylistic or decorative purposes. For example:
          {"\n"} ひ (hi) with maru becomes ぴ (pi).
          {"\n"} ふ (fu) with maru becomes ぷ (pu).
          {"\n"} ほ (ho) with maru becomes ぽ (po).
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8 }}>
          Dakuten (Voiced Marks):
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Dakuten, represented by a small circle ( ゙ ), is similar to tenten
          but is used with hiragana and katakana characters to indicate a voiced
          sound. It is placed at the upper right corner of a character. For
          example:
          {"\n"} は (ha) with dakuten becomes ば (ba).
          {"\n"} ひ (hi) with dakuten becomes び (bi).
          {"\n"} ふ (fu) with dakuten becomes ぶ (bu).
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8 }}>
          Handakuten (Half Voiced Marks):
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Handakuten, represented by a small circle ( ゜ ), is used with the
          "ha" line of hiragana characters to indicate a half-voiced sound. It
          changes the pronunciation from "ha" to "pa," "hi" to "pi," and so on.
          {"\n"} は (ha) with handakuten becomes ぱ (pa).
          {"\n"} ひ (hi) with handakuten becomes ぴ (pi).
          {"\n"} ふ (fu) with handakuten becomes ぷ (pu).
        </Text>

        <Text style={{ fontSize: 18, marginBottom: 8 }}>Basic Kanji:</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {kanjiList.map((kanji) => (
            <Pressable
              key={kanji.character}
              onPress={() => handleKanjiPress(kanji)}
              style={buttonStyle}
            >
              <Text style={buttonTextStyle}>{kanji.character}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Modal for displaying Kanji details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedKanji !== null}
        onRequestClose={closeModal}
      >
        <View style={modalContainer}>
          <View style={modalContent}>
            <View style={modalHeader}>
              <Text style={modalHeaderText}>{selectedKanji?.character}</Text>
            </View>
            <Text>{`Meaning: ${selectedKanji?.meaning}`}</Text>
            <Text>{`Hiragana: ${selectedKanji?.hiragana}`}</Text>
            <Text>{`Romaji: ${selectedKanji?.romaji}`}</Text>
            <Pressable style={closeButton} onPress={closeModal}>
              <Text style={buttonTextStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const buttonStyle = {
  backgroundColor: "#3498db",
  padding: 20,
  margin: 10,
  borderRadius: 10,
};

const buttonTextStyle = {
  color: "#ffffff",
  fontSize: 16,
};

const modalContainer = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0)",
};

const modalContent = {
  backgroundColor: "#3498db",
  padding: 20,
  borderRadius: 20,
  width: "80%",
  color: "#ffffff",
};

const modalHeader = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 30,
  marginBottom: 15,
};

const modalHeaderText = {
  fontSize: 50,
  fontWeight: "bold",
  color: "#ffffff",
};

const closeButton = {
  padding: 10,
};

export default KanjiPage;
