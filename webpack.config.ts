import * as path from "path";
import { Configuration } from "webpack";

const config = (env: any): Configuration => {
    return {
        mode: "production",
        entry: "./src/index.ts",
        module: {
            rules: [
                {
                    test: /\.(ts|js)?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        output: {
            path: path.resolve(__dirname, env.path || ""),
            filename: "base64.min.js",
            library: "Base64",
        },
    };
};
export default config;
