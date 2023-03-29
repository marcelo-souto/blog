import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/material';

import theme from './theme/Theme';

import LoginPage from './pages/LoginPage';
import GlobalStyles from './styles/GlobalStyles';
import { UserStorage } from './context/UserContext';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './helpers/ProtectedRoute';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<UserStorage>
				<GlobalStyles />
				<Stack minHeight={'calc(100vh + 112px)'}>
					<Header />
					<Stack flex='1' display='grid'>
						<Routes>
							<Route path='login/*' element={<LoginPage />} />
							<Route
								path='dashboard/*'
								element={
									<ProtectedRoute>
										<DashboardPage />
									</ProtectedRoute>
								}
							/>
						</Routes>
					</Stack>
					<Footer />
				</Stack>
			</UserStorage>
		</ThemeProvider>
	);
};

export default App;
