const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    devServer: {
        open:true
    },
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:['@babel/env','@babel/react'],
                        plugins:['@babel/proposal-class-properties'],
                    }
                }
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.s[ac]ss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        outputPath:'images',
                        name:'[name]-[sha1:hash:7].[ext]'
                    }
                }
            },
            {
                test:/\.(ttf|otf|eot)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        outputPath:'fonts',
                        name:'[name]-[sha1:hash:7].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
};