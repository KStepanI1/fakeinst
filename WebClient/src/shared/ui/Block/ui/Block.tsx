import React, { FC, memo } from "react";
import classNames from "classnames";
import cls from "./Block.module.scss";
import { ReactDivProps } from "../../../types/ReactElementProps";
import { ThemeBlock } from "../config/ThemeBlock";

export interface BlockProps extends ReactDivProps {
    className?: string;
    theme?: ThemeBlock;
}

const Block: FC<BlockProps> = React.forwardRef<HTMLDivElement, BlockProps>(
    (props, ref) => {
        const {
            className,
            children,
            theme = ThemeBlock.PRIMARY,
            ...otherProps
        } = props;

        return (
            <div
                className={classNames(cls.Block, className, cls[theme])}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

export default memo(Block) as typeof Block;
