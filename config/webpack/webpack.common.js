/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Webpack Common Configuration.
 **/

 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CopyPlugin = require('copy-webpack-plugin');
 const { name } = fs.existsSync(path.join(__dirname, '../microFrontend/microfrontend.prod.json'))
 ? require("../microFrontend/microfrontend.prod.json")
 : require("../microFrontend/microfrontend.dev.json");

 module.exports = {
     entry: './src/index',
     output: {
         path: path.resolve(__dirname, '../../build'),
         filename: 'js/bundle.js',
         library: name,
         libraryTarget: 'umd'
     },
     module: {
         rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                  fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['@babel/preset-env', '@babel/preset-react']
                     }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                     {
                         loader: 'file-loader',
                         options: {
                             name: 'img/[name].[ext]'
                         }
                     }
                ]
            }
         ]
     },
     resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
     },
     plugins: [
        new HtmlWebpackPlugin({
            template: './src/App/views/index.html',
            filename: 'index.html',
            manifest: './src/App/views/manifest.json'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/App/views/img', to: 'img/' },
                { from: './src/App/views/img/icon.png', to: 'img/' },
                { from: './src/App/views/manifest.json', to: '' },
                { from: './src/App/views/img/icon144x144.png', to: 'img/' },
                { from: './src/App/views/img/icon512x512.png', to: 'img/' },
            ]
        })
     ]
 }; 