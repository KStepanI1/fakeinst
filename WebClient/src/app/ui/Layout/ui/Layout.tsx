import React, { FC } from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import Header from "widgets/Header/ui/Header";

export interface LayoutProps {
    className?: string;
}

const Layout: FC<LayoutProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(className)}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
