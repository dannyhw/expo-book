import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { storyStore } from "~/utils/StoryStore";

export default function Page() {
  return (
    <View className="flex-1 p-6">
      <Stack.Screen options={{ title: "Overview" }} />
      <View className="max-w-[960] flex-1 justify-between">
        <View className="items-center">
          {Object.keys(storyStore).map((storyId) => {
            const { title, name } = storyStore[storyId];
            return (
              <Link
                key={storyId}
                href={{
                  pathname: "/storybook/[storyId]",
                  params: { storyId },
                }}
                asChild
              >
                <Pressable className="group mb-3 rounded-md">
                  <Text className="text-center text-lg font-semibold text-blue-600 underline group-active:text-blue-800">
                    {title} - {name}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </View>
    </View>
  );
}
