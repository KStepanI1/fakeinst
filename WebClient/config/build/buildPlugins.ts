import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildPaths } from "./types/config";

export function buildPlugins(
    paths: BuildPaths,
    isDev: boolean,
): WebpackPluginInstance[] {
    const plugins: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
}
