import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new ProgressPlugin(),
    ];
}
