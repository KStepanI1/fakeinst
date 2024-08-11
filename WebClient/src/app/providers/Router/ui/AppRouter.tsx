import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "app/ui/Layout";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageError } from "widgets/PageError";
import { PageLoader } from "widgets/PageLoader";
import RequireAdmin from "./RequireAdmin";
import RequireAuth from "./RequireAuth";
import {
    AppRoute,
    AppRouteProps,
    routeConfig,
    RoutePath,
} from "../routeConfig/routeConfig";

const AppRouter = () => {
    const getSuspenseElement = (element: React.ReactNode) => (
        <Suspense fallback={<PageLoader />}>
            <ErrorBoundary fallback={<PageError />}>
                <div className="page-wrapper">{element}</div>
            </ErrorBoundary>
        </Suspense>
    );

    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        let susspensedElement = getSuspenseElement(route.element);

        if (route.authOnly) {
            susspensedElement = <RequireAuth>{susspensedElement}</RequireAuth>;
        }

        if (route.adminOnly) {
            susspensedElement = (
                <RequireAdmin>{susspensedElement}</RequireAdmin>
            );
        }

        return (
            <Route
                key={route.path}
                element={susspensedElement}
                path={route.path}
                index={route.index as true & false}
            >
                {route.children?.map(renderWithWrapper)}
            </Route>
        );
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    element={getSuspenseElement(<NotFoundPage />)}
                    path={RoutePath[AppRoute.NOT_FOUND]}
                />
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Route>
        </Routes>
    );
};

export { AppRouter };
