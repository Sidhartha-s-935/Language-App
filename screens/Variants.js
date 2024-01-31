// VariantsInfoPage.js

import React from "react";
import { View, Text, ScrollView } from "react-native";

const VariantsInfoPage = () => {
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

        {/* Add more explanations for other diacritic marks or variants as needed */}
      </View>
    </ScrollView>
  );
};

export default VariantsInfoPage;
