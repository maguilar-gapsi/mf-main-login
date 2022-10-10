/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Estilos del componente Footer.
 **/

 import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles(() => ({
    footer: {
		textAlign: 'center',
		minWidth: '100%',
		fontFamily: 'Roboto',
		backgroundColor: '#fff',
		position: 'absolute',
		bottom: 0,
		left: 0,
		padding: '16px 0',
		width: '100%',
		color: 'black',
		zIndex: 10,
		fontSize: '.75rem',
	}
 }));

 export default useStyles;