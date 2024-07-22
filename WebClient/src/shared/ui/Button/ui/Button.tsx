import React, { FC, memo } from "react";
import cls from "./Button.module.scss";
import classNames from "classnames";
import { ThemeButton } from "../config/ThemeButton";

type ReactButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export interface ButtonProps extends Omit<ReactButtonProps, "ref"> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ThemeButton.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, className, cls[theme])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default memo(Button) as typeof Button;
