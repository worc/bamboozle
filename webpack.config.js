const webpack = require('webpack');
const packageJSON = require('./package.json');

const banner = `${packageJSON.name} ${packageJSON.version} - ${packageJSON.description}\nCopyright 2020 ${packageJSON.author} - ${packageJSON.homepage}\nLicense: ${packageJSON.license}`;

module.exports = {
    context: __dirname + '/src',
    entry: './Bamboozle.js',
    mode: 'production',
    output: {
        path: __dirname + '/dist',
        filename: `${packageJSON.name}.min.js`,
        library: `${packageJSON.name}`,
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ]
};
