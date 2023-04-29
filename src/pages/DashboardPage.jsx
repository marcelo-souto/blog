import React from 'react';
import { Stack } from '@mui/material';
import DashboardMenu from '../components/Dashboard/DashboardMenu';
import DashboardAccount from '../components/Dashboard/DashboardAccount';
import DashboardPosts from '../components/Dashboard/DashboardPosts';
import DashboardStatistics from '../components/Dashboard/DashboardStatistics';
import { Route, Routes } from 'react-router-dom';

const DashboardPage = () => {
	return (
		<Stack direction='row' maxWidth={960} width='100%' margin='0 auto'>
			<DashboardMenu />
			<Stack flexGrow={1} mt={6} pl={3} pr={2}>
				<Routes>
					<Route path='/posts' element={<DashboardPosts />} />
					<Route path='/account' element={<DashboardAccount />} />
					<Route path='/statistics' element={<DashboardStatistics />} />
				</Routes>
			</Stack>
		</Stack>
	);
};

export default DashboardPage;
