import { Meta, StoryObj } from "@storybook/react";
import { Text, View } from "react-native";

import { PressableOpacity } from "./PressableOpacity";

// of course you can just use TouchableOpacity, but this example is a really easy one to show how you can use reanimated to create a custom button
const meta = {
  title: "Buttons/PressableOpacity",
  component: PressableOpacity,
  argTypes: {
    onPress: { action: "onPress" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PressableOpacity>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Text style={{ color: "white" }}>Hello world!</Text>,
    style: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      backgroundColor: "#d238a2",
      borderRadius: 8,
    },
  },
};

export const CardExample: Story = {
  args: {
    children: <Text>Hello world!</Text>,
    style: {
      backgroundColor: "white",
      padding: 16,
      width: 300,
      height: 300,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderRadius: 8,
    },
  },
};

export const LinkExample: Story = {
  args: {
    children: (
      <Text style={{ textDecorationLine: "underline" }}>Hello world!</Text>
    ),
    style: {},
  },
};
