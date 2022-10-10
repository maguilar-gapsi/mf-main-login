/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Componente Footer.
 **/

import React from 'react';
import useStyles from './styles/Footer.style';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  const { footer } = useStyles();

  return (
    <Container className={footer}>
			<Typography variant='caption'>
			  2022 Liverpool / Todos los derechos reservados D.R. ®
			</Typography>
		</Container>
  )
}

export default Footer
