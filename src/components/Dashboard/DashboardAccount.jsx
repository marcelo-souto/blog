import React from 'react';
import { UserContext } from '../../context/UserContext';
import { Stack, Typography } from '@mui/material';

const DashboardAccount = () => {
	const { user } = React.useContext(UserContext);
	console.log(user);
	return (
		<Stack>
			<Typography variant='title2v3' mb={3}>
				Informações de conta
			</Typography>
			<Typography>Nome: {user?.name}</Typography>
			<Typography>Email: {user?.email}</Typography>
			<Typography>
				URL da Imagem: <a href={user?.avatar?.url}>{user?.avatar?.url}</a>
			</Typography>
		</Stack>
	);
};

export default DashboardAccount;