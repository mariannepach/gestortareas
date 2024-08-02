const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/presets-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};
