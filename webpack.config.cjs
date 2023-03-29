const path = require("path");
const fileURLToPath = require("url").fileURLToPath;

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "module",
        },
        clean: true,
    },
    experiments: {
        outputModule: true,
    },
};
