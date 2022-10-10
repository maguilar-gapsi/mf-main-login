/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Archivo de importación de componentes y configuración de rutas.
 **/

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from '../../views/styles/App.theme';
import Login from '../../../Login/business/Login';

const App = (props) => (
    <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Login props={props} />
    </ThemeProvider>
);

export default App;
