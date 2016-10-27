module.exports = {
    entry: {
        "dev": "./src/componentA/main",
        "test-component-b": "./src/componentB/main",

    },
    output: {
       filename: "[name].js",
       path: __dirname + "/dist",
       library: "[name]",
       libraryTarget: "umd"

    },
    
    resolve: {
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
    externals: {
        'test-component-a': 'test-component-a' ,
        'test-component-b': 'test-component-b',
        "requirejs": 'require', 
        'knockout':'knockout' 

    }
}