import { RuleSetRule } from "webpack";
import { buildCssLoader } from "./loaders/buildStyleLoader";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fontsLoader: RuleSetRule = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    };

    const imageLoader: RuleSetRule = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader: RuleSetRule = {
        // test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx: false,
                        },
                    ],
                    "@babel/plugin-transform-runtime",
                    isDev && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
            },
        },
    };

    const styleLoader: RuleSetRule = buildCssLoader(isDev);

    return [
        babelLoader,
        typescriptLoader,
        styleLoader,
        fontsLoader,
        imageLoader,
        svgLoader,
    ];
}
