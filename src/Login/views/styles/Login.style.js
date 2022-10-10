/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Estilos del componente Login.
 **/

 import { makeStyles } from '@mui/styles';
 import backImage from '../img/background.jpg';

 const useStyles = makeStyles(() => ({
    mt3: {
        marginTop: '6rem !important'
	},
    paperContainer: {
		minHeight: 250,
		boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
		paddingBottom: 10,
        textAlign: 'center'
	},
    title: {
		fontWeight: 'bold !important',
		padding: '10px 20px'
	},
	backImg:{
		backgroundImage: `url(${backImage})`,
		width:'100%',
		height:'220px',
		backgroundRepeat:'no-repeat',
		backgroundSize:'100% 100%'
	},
	center:{
		textAlign:'center'
	}

 }));

 export default useStyles;