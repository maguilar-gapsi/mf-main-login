/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Componente Header.
 **/
 import React from "react";
 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import IconButton from '@mui/material/IconButton';
 import { ThemeProvider } from '@mui/material/styles';
 import { theme } from "./styles/styles";
 
 export default function Header() {
   return <ThemeProvider theme={theme}>
     <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <img src="https://storage.googleapis.com/bk-vas-qr-cdn/img/background_qrs/liverpool-logo.svg" alt="Liverpool, es parte de tu vida" style={{ maxWidth: "165px" }} />
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}
           >
           </IconButton>
         </Toolbar>
       </AppBar>
     </Box>
   </ThemeProvider>
 };
 