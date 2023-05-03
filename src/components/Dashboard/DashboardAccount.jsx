import React from 'react';
import { Button, Link, Stack, Typography } from '@mui/material';
import DashboardAccountItem from './DashboardAccountItem';
import DashboardAccountModal from './DashboardAccountModal';
import { useSelector } from 'react-redux';

const DashboardAccount = () => {
	const { data } = useSelector(state => state.user)
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

			<DashboardAccountItem legend='Nome:' info={data?.name} />
			<DashboardAccountItem legend='Email:' info={data?.email} />
			<DashboardAccountItem legend='URL da Imagem:' info={data?.avatar?.url} />

			{open && <DashboardAccountModal open={open} handleClose={handleClose} />}
		</Stack>
	);
};

export default DashboardAccount;
