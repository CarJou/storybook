import type { Meta, StoryObj } from "@storybook/react";

import { LikeButton } from "./LikeButton";

const meta: Meta<typeof LikeButton> = {
  title: "Example/LikeButton",
  component: LikeButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LikeButton>;

export const Light: Story = {
  args: {
    theme: "light",
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
  },
};

