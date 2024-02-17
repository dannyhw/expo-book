import type { Meta, StoryObj } from "@storybook/react";

import { PressableRippleGesture } from "./PressableRippleGesture";
import PressableOpacityStoriesMeta, {
  Basic,
  LinkExample,
} from "../PressableOpacity/PressableOpacity.stories";
import { OverlayCardExample } from "../PressableOverlay/PressableWithOverlay.stories";

const meta = {
  title: "Buttons/PressableRippleGesture",
  component: PressableRippleGesture,
  argTypes: PressableOpacityStoriesMeta.argTypes,
  decorators: PressableOpacityStoriesMeta.decorators,
} satisfies Meta<typeof PressableRippleGesture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Ripple: Story = {
  ...Basic,
};

export const CardRipple: Story = {
  ...OverlayCardExample,
};

export const LinkRipple: Story = {
  ...LinkExample,
};
