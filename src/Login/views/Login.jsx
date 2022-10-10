/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Vista del componente Login.
 **/

 import React from 'react';
 import { GoogleLogin } from 'react-google-login';
 import Header from '../../Header/views/Header';
 import Footer from '../../Footer/views/Footer';
 import useStyles from './styles/Login.style';
 import Alert from '../../Alert/business/Alert';
 import { 
    Grid, 
    Typography,
    CardContent,
    Paper,
    Divider,Box
} from '@mui/material';
import Link from '@mui/material/Link';

 const View = (props) => {
    const { responseGoogle, alertOptions } = props;
    const { mt3, paperContainer, title, backImg, center  } = useStyles();

    return (
        <>
            <Header/>
            <Alert alertOptions={alertOptions} />
            <div className={backImg}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3} lg={4}/>
                        <Grid item xs={12} sm={6} lg={4} className={mt3}>
                            <Paper className={paperContainer}>
                                <Typography variant='subtitle1' className={title}>
                                    Iniciar sesión
                                </Typography>
                                <Divider />
                                <GoogleLogin
                                    clientId={process.env.CLIENTID}
                                    buttonText="Iniciar sesión con Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    className={mt3}
                                />  

                            </Paper>
                        </Grid>
                    </Grid>
                    <Box mt={4} pt={1} className={center}>
                        <Link 
                            href="https://assetspwa.liverpool.com.mx/ayuda/index.html#/sec/terminos-y-condiciones/proteccion-de-datos/aviso-clientes" 
                            target='_Blank'
                        >
                            Política de privacidad
                        </Link>
                     </Box>      
                </CardContent>
            </div>
            <Footer/>
        </>
    );
};

 export default View;