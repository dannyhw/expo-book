import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";

export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="flex-1">
        <Stack />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
