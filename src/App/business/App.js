/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Archivo para renderizar los componentes.
 * version 1.01
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.routes';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    App,
    domElementGetter: () => document.getElementById('mf-login'),
});
  
export const { bootstrap } = reactLifecycles;
export const { mount } = reactLifecycles;
export const { unmount } = reactLifecycles;