/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Componente Login.
 **/

 import React, { useEffect, useState } from 'react';
 import { obtainUser } from '../services/Login.services';
 import { closeAlertAction, initialState } from '../../Alert/business/Alert';
 import { gapi } from 'gapi-script';
 import View from '../views/Login';
 import CryptoJS from 'crypto-js';
 
 const Login = () => {
    const [alertOptions, setAlertOptions] = useState(initialState);
     
    const responseGoogle = async(response) => {
        const session = sessionStorage.getItem('userData');
        
        if (!session) {
            const { 
                accessToken, 
                profileObj: { email },
                tokenObj
            } = response;

            if(accessToken){
                const { code, data } = await obtainUser({ email });
                
                if (code === 200) {
                const token = CryptoJS.AES.encrypt(JSON.stringify(tokenObj.id_token), process.env.VASKEY).toString();

                sessionStorage.setItem('token', token);
                sessionStorage.setItem('userData', JSON.stringify(tokenObj));
                sessionStorage.setItem('userDataC', JSON.stringify(response));
                    location.href = '/orderCreation/';
                } else {
                    closeAlertAction(
                        {
                            ...alertOptions,
                            severity: 'error',
                            message: 'No estás autorizado',
                            open: true,
                            location: { vertical: 'bottom', horizontal: 'center' }
                        },
                        setAlertOptions
                    );
                }
            }
        }
    };

    const start = () => {
        gapi.client.init({
            clientId: process.env.CLIENTID,
            scope: 'email',
        });
    };

    useEffect(() => {
        gapi.load('client:auth2', start);
        const data = sessionStorage.getItem('userData');

        if (data) {
            const { id_token } = JSON.parse(data);

            if (id_token) {
                location.href = '/orderCreation/';
            }
        }
    }, []);

    return (
        <>
            <View 
                responseGoogle={responseGoogle}
                alertOptions={alertOptions}
            />
        </>
    );
};

export default Login;
