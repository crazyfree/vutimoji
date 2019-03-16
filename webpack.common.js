const path = require('path');


module.exports = {
    entry: {
        main: './src/main.js'
    },
    optimization: {
        minimize: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'vutimoji',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel-loader'
            }
        ]
    }
}