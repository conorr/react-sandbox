module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: './dist/',
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/,
                    /dist/
                ]
            }
        ]
    }

};
