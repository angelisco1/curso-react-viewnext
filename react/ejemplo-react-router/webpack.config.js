const path = require('path');
const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
    entry: path.join(entryPath, 'app.js'),
    output: {
        filename: 'bundle.js',
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        contentBase: outputPath,
        historyApiFallback: true
    }
}