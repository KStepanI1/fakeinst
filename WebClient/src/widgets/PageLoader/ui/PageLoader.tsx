import React, { memo } from "react";
import { LoaderVariant, Loader } from "shared/ui/Loader";
import classNames from "classnames";
import cls from "./PageLoader.module.scss";

export interface PageLoaderProps {
    className?: string;
}

const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, className)}>
            <Loader variant={LoaderVariant.LARGE} className={cls.loader} />
        </div>
    );
};

export default memo(PageLoader);
