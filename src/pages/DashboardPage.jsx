import React from 'react';;
import {  Stack } from '@mui/material';
import DashboardMenu from '../components/Dashboard/DashboardMenu';

const DashboardPage = () => {
	return (
		<Stack component='aside' direction='row'>
			<DashboardMenu />
			<Stack flexGrow={1} bgcolor='#000000'>
				fsa
			</Stack>
		</Stack>
	);
};

export default DashboardPage;
