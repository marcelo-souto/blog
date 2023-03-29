import { Grid } from '@mui/material';
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ForgetPasswordForm from '../components/Login/ForgetPasswordForm';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Login/RegisterForm';
import { UserContext } from '../context/UserContext';
import PageTitle from '../helpers/PageTitle';

const LoginPage = () => {
	const { login } = React.useContext(UserContext);
	const location = useLocation();

	const paths = {
		'/login': 'Login',
		'/login/register': 'Cadastre-se',
		'/login/forgetpassword': 'Esqueci minha senha'
	};

	if (login) return <Navigate to='/dashboard' />;
	return (
		<Grid container spacing={2}>
			<PageTitle title={paths[location.pathname]} />
			<Grid
				item
				sx={{ display: { xs: 'none', md: 'block' } }}
				xs={0}
				md={6}
				lg={8}
			>
				<Carousel />
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route path='/register' element={<RegisterForm />} />
					<Route path='/forgetpassword' element={<ForgetPasswordForm />} />
				</Routes>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
