var config = {
    // TODO: Add common Configuration
    module: {},
};

var gameConfig = Object.assign({}, config, {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/main.ts",
    output: {
        filename: "build/clad.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
});

var editorConfig = Object.assign({}, config, {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/editor.ts",
    output: {
        filename: "build/editor.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
});

module.exports = [
    gameConfig, editorConfig
];
