import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildLoaders(isDev: boolean): RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]",
                        namedExport: false,
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [typescriptLoader, styleLoader, babelLoader, svgLoader];
}
