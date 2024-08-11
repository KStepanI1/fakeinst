import React, { FC } from "react";
import classNames from "classnames";
import cls from "./Header.module.scss";

export interface HeaderProps {
    className?: string;
}

const Header: FC<HeaderProps> = (props) => {
    const { className } = props;
    return <div className={classNames(cls.Header, className)}>Header</div>;
};

export default Header;
