import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

import { PressableWithOverlay } from "./PressableWithOverlay";
import PressableOpacityStoriesMeta, {
  Basic,
  CardExample,
  LinkExample,
} from "../PressableOpacity/PressableOpacity.stories";

const meta = {
  title: "Buttons/PressableWithOverlay",
  component: PressableWithOverlay,
  argTypes: PressableOpacityStoriesMeta.argTypes,
  decorators: PressableOpacityStoriesMeta.decorators,
} satisfies Meta<typeof PressableWithOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OverlayBasic: Story = {
  ...Basic,
};

export const OverlayCardExample: Story = {
  decorators: [
    (Story) => {
      return (
        <View
          // since the overlay has overflow hidden we can't apply shadow to it directly
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            borderRadius: 8,
          }}
        >
          <Story />
        </View>
      );
    },
  ],
  args: {
    ...CardExample.args,
    style: {
      backgroundColor: "white",
      padding: 16,
      width: 300,
      height: 300,
      borderRadius: 8,
    },
  },
  ...CardExample,
};

// not so great here
export const OverlayLinkExample: Story = {
  ...LinkExample,
  args: {
    ...LinkExample.args,
    style: {
      padding: 2,
      borderRadius: 4,
    },
  },
};
