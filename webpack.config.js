const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs2",
        clean: true,
    },
    experiments: {
        outputModule: true,
    },
};