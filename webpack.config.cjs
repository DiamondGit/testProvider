const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "module",
        clean: true,
    },
    experiments: {
        outputModule: true,
    },
};
