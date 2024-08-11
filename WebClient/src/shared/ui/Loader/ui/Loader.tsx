import React, { memo } from "react";
import classNames from "classnames";
import cls from "./Loader.module.scss";
import { LoaderVariant } from "../config/LoaderVariant";

export interface LoaderProps {
    className?: string;
    variant?: LoaderVariant;
}

const Loader = (props: LoaderProps) => {
    const { className, variant = LoaderVariant.MEDIUM } = props;

    return <div className={classNames(cls.Loader, className, cls[variant])} />;
};

export default memo(Loader);
