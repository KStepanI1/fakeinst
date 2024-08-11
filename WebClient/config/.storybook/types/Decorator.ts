import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "storybook/internal/types";

export type Decorator = DecoratorFunction<
    ReactRenderer,
    {
        [x: string]: any;
    }
>;
