import React, { FC } from "react";
import classNames from "classnames";

export interface AuthPageProps {
    className?: string;
}

const AuthPage: FC<AuthPageProps> = (props) => {
    const { className } = props;

    return <div className={classNames(className)}>AuthPage</div>;
};

export default AuthPage;
