import type { Meta, StoryObj } from "@storybook/react";
import Block from "./Block";
import { ThemeBlock } from "../config/ThemeBlock";

const meta = {
    title: "shared/Block",
    component: Block,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Block",
        theme: ThemeBlock.PRIMARY,
    },
};

export const Bordered: Story = {
    args: {
        children: "Block",
        theme: ThemeBlock.BORDERED,
    },
};
