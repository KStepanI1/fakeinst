import { AuthPage } from "pages/AuthPage";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = Omit<RouteProps, "children" | "index"> & {
    authOnly?: boolean;
    adminOnly?: boolean;
    children?: AppRouteProps[];
    index?: boolean;
};

export enum AppRoute {
    MAIN = "main",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: "/",
    [AppRoute.NOT_FOUND]: "*",
};

export const RouteName = {
    [RoutePath.main]: "FakeInst",
    [RoutePath.not_found]: "Page not found",
};

export const routeConfig: { [key in AppRoute]?: AppRouteProps } = {
    [AppRoute.MAIN]: {
        index: true,
        path: RoutePath.main,
        element: <AuthPage />,
    },
};
