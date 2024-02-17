import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

import { PressableRipple } from "./PressableRipple";
import PressableOpacityStoriesMeta, {
  Basic,
  LinkExample,
} from "../PressableOpacity/PressableOpacity.stories";
import { OverlayCardExample } from "../PressableOverlay/PressableWithOverlay.stories";

const meta = {
  title: "Buttons/PressableRipple",
  component: PressableRipple,
  argTypes: PressableOpacityStoriesMeta.argTypes,
  decorators: PressableOpacityStoriesMeta.decorators,
} satisfies Meta<typeof PressableRipple>;

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
