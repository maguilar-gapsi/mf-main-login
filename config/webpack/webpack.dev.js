/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Webpack Development Configuration.
 **/

 const { merge } = require('webpack-merge');
 const common = require('./webpack.common');
 const Dotenv = require('dotenv-webpack');
 const path = require('path');
 const fs = require('fs');
 const { port } = require("../microFrontend/microfrontend.dev.json");

 const devConfig = {
     mode: 'development',
     devServer: {
         port: port,
         historyApiFallback: true
     },
     devtool: 'eval-source-map',
     plugins: [
         new Dotenv({
             path: fs.existsSync(path.join(__dirname, '../.env'))
                 ? path.resolve(__dirname, '../.env')
                 : path.resolve(__dirname, '../.env.local')
         })
     ]
 };
 
 module.exports = merge(common, devConfig);
 