import type { Meta, StoryObj } from "@storybook/react";

import { LikeButton } from "./LikeButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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

