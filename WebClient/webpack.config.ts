import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {
    BuildEnv,
    BuildMode,
    BuildOptions,
    BuildPaths,
} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const mode: BuildMode = env.mode ?? "development";
    const PORT = env.port ?? 3000;

    const isDev = mode === "development";

    const options: BuildOptions = {
        paths,
        mode,
        isDev,
        port: PORT,
    };

    const config: Configuration = buildWebpackConfig(options);

    return config;
};
