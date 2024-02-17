import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";

import { Button } from "./Button";

const meta = {
  component: Button,
  title: "components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text className="text-center text-white">Hello World</Text>,
    className: "bg-indigo-500 rounded-full shadow-md p-4",
  },
};
export const Red: Story = {
  args: {
    children: <Text className="text-center text-white">Hello World</Text>,
    className: "bg-red-600 rounded-full shadow-md p-4",
  },
};
