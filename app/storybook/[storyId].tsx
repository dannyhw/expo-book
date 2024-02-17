import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

import { storyStore } from "~/utils/StoryStore";

export default function Page() {
  const { storyId } = useLocalSearchParams();

  if (typeof storyId !== "string") return null;

  const { Component = () => null, args = {} } = storyStore[storyId] ?? {};

  return (
    <View className="flex-1 p-4">
      <Stack.Screen options={{ title: "Story" }} />
      <Text className="mb-4">Story: {storyId}</Text>
      {Component && args && <Component {...args} />}
    </View>
  );
}
