import { Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Stack padding={3} mt={8} backgroundColor='#F5F5F5'>
			<Typography
				variant='body1'
				textAlign='center'
				fontFamily='Inter'
				color='grey.600'
			>
				© {new Date().getFullYear()} Alguns direitos reservados
			</Typography>
		</Stack>
	);
};

export default Footer;
