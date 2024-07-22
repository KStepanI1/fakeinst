import path from "path";
import { BuildPaths } from "./../build/types/config";
import { Configuration, RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildStyleLoader";

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");

    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = config!.module!.rules!.map((rule) => {
        const r = rule as RuleSetRule;

        if (/svg/.test(r.test as string)) {
            return { ...r, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    config!.module!.rules.push(buildCssLoader(true));

    return config;
};
