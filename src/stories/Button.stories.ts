import { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Library/Button",
  component: Button,
  tags: ["autodocs"],
  // argTypes: {
  //   children: { control: "color" },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Test",
  },
};
