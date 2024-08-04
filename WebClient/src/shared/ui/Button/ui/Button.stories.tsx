import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";
import { ThemeButton } from "../config/ThemeButton";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Войти",
        theme: ThemeButton.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: "Подписки",
        theme: ThemeButton.SECONDARY,
    },
};

export const Link: Story = {
    args: {
        children: "Подписаться",
        theme: ThemeButton.LINK,
    },
};
