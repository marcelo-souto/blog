import React from 'react';
import { UserContext } from '../../context/UserContext';
import { Button, Link, Stack, Typography } from '@mui/material';
import DashboardAccountItem from './DashboardAccountItem';
import useForm from '../../hooks/useForm';
import DashboardAccountModal from './DashboardAccountModal';

const DashboardAccount = () => {
	const { user } = React.useContext(UserContext);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Stack>
			<Stack direction='row' mb={3} spacing={1}>
				<Typography variant='title2v3'>Minha Conta</Typography>
				<Link
					component='button'
					fontFamily='Inter, sans-serif'
					fontSize='0.8rem'
					color='grey.600'
					onClick={handleOpen}
				>
					editar
				</Link>
			</Stack>

			<DashboardAccountItem legend='Nome:' info={user?.name} />
			<DashboardAccountItem legend='Email:' info={user?.email} />
			<DashboardAccountItem legend='URL da Imagem:' info={user?.avatar?.url} />

			{open && <DashboardAccountModal open={open} handleClose={handleClose} />}
		</Stack>
	);
};

export default DashboardAccount;
