import { Stack, Typography } from '@mui/material';
import React from 'react';


const DashboardAccountItem = ({ legend, info }) => {
	const [editMode, setEditMode] = React.useState(null);
	return (
		<Stack mb={2}>
			<Typography color='grey.600' textTransform='lowercase'>
				{legend}
			</Typography>
			<Typography
				fontSize='1.2rem'
				variant='body1'
				color='grey.800'
				m={0}
				p={0}
			>
				{info}
			</Typography>
		</Stack>
	);
};

export default DashboardAccountItem;
