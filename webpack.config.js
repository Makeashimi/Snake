const path = require('path');
module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "snake.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
}