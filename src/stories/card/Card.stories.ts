import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    /*backgroundColor: {
      control: "color",
    },*/
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

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

export const Large: Story = {
  args: {
    size: "large",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
  },
};
