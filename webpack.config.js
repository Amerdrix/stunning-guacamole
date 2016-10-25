module.exports = {
    entry: {
        "test-component-a": "componentA/main",
        "test-component-b": "componentB/main",

    },
    output: {
       filename: "[name].js",
       path: __dirname + "/dist",
       library: "[name]",
       libraryTarget: "commonjs2"

    },
    resolve: {
        root: __dirname + "/src/",
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
    module: {
        loaders: [
            {
                test: /\.tsx?/, loaders: ['ts']
            }
        ]
    },
    externals: [
        'test-component-a',
        'test-component-b'
    ]
}