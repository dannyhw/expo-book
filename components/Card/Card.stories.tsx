import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

import { Card } from "./Card";

const meta = {
  component: Card,
  title: "components/Card",
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text className="text-center text-white">Hello World</Text>,
  },
};
