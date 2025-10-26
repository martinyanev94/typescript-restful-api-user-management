npm install --save-dev webpack webpack-cli ts-loader
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
"build": "webpack"
