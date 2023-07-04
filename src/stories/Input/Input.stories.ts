import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    /*backgroundColor: {
      control: "color",
    },*/
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

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
