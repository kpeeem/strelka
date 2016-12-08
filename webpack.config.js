'use strict';

const webpack = require('webpack');
const dotenv = require('dotenv');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
dotenv.load();

const NODE_ENV = process.env.NODE_ENV || 'developer';
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const isDevelopment = NODE_ENV === 'developer';

function addHash(template, hash) {
    return !isDevelopment ?
        template.replace(/\.[^.]+$/, '.['+hash+']$&') : template;
}

let webpackConfig = {
    entry: [
    './src/'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: isDevelopment ?
                [
                    'react-hot',
                    'babel?presets[]=es2015,presets[]=react,presets[]=stage-0&plugins[]=transform-runtime'
                ]
                :
                ['strip?strip[]=console.log', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
        },
        {
            test: /\.styl$/,
            loader:  ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]!postcss!stylus?linenos=true?resolve url!postifycss')
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }


        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl, .css']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: addHash('[id].js', 'hash')
    },
    node: {
        fs: "empty"
    },
    postcss: function () {
        return {
            defaults: [autoprefixer({ browsers: ['last 10 versions'] })]
        };
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            prettyPrint: true,
            update: true
        }),
        new ExtractTextPlugin(addHash('styles.css', 'contenthash'), {allChunks: true})
    ]
};

if (!isDevelopment) {
    webpackConfig.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: /a^/, compress: {
            warnings:     false,
            drop_console: true,
            unsafe:       true
        }}),
        new webpack.optimize.DedupePlugin()
    );
} else {
    webpackConfig.entry.unshift(
        'webpack-dev-server/client?http://' + HOST + ':' + PORT + '',
        'webpack/hot/only-dev-server'
    );
    webpackConfig.devServer = {
        port: PORT,
        contentBase: './dist',
        hot: true
    };
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;