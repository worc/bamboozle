module.exports = {
    context: __dirname,
    entry: './demo.js',
    output: {
        path: __dirname + '/dist',
        filename: `demo.js`
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};