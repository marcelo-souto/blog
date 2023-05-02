import { Stack, Typography } from '@mui/material';
import React from 'react';

const DashboardAccountItem = ({ legend, info }) => {
	return (
		<Stack mb={2}>
			<Typography color='grey.600' textTransform='lowercase'>
				{legend}
			</Typography>
			<Typography variant='body1' color='grey.800' >
				{info}
			</Typography>
		</Stack>
	);
};

export default DashboardAccountItem;
