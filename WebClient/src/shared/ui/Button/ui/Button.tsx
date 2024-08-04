import React, { FC, memo } from "react";
import classNames from "classnames";
import { ReactButtonProps } from "shared/types/ReactElementProps";
import cls from "./Button.module.scss";
import { ThemeButton } from "../config/ThemeButton";

export interface ButtonProps extends ReactButtonProps {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>((props, ref) => {
    const {
        className,
        theme = ThemeButton.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, className, cls[theme])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            ref={ref}
        >
            {children}
        </button>
    );
});

export default memo(Button) as typeof Button;
