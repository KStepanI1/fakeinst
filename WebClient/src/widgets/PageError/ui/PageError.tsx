import React, { FC } from "react";
import classNames from "classnames";
import { Button } from "shared/ui/Button";
import { Block } from "shared/ui/Block";
import cls from "./PageError.module.scss";

export interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, className)}>
            <Block>
                Something went wrong
                <Button onClick={reloadPage}>Reload</Button>
            </Block>
        </div>
    );
};

export default PageError;
