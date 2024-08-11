import React, { FC } from "react";
import classNames from "classnames";
import cls from "./AuthPage.module.scss";

export interface AuthPageProps {
    className?: string;
}

const AuthPage: FC<AuthPageProps> = (props) => {
    const { className } = props;

    return <div className={classNames(cls.AuthPage, className)}>AuthPage</div>;
};

export default AuthPage;
