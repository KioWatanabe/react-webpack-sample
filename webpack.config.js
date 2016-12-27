const path = require("path");
const webpack = require("webpack");

module.exports = {
    //entry: "./src/index.js",
    entry: "./src/main.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"],
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.svg$/,
                loader: "file",
                query: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            }
        ]
    }
};
