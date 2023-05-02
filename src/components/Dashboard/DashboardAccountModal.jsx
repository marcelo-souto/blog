import React from 'react';
import { Dialog, DialogActions, DialogTitle, Stack } from '@mui/material';
import Button from '../Button';
import Input from '../Input';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../context/UserContext';
import { POST_UPDATE_USER } from '../../api/api';
import useFetch from '../../hooks/useFetch';

const DashboardAccountModal = ({ open, handleClose }) => {
	const { user } = React.useContext(UserContext);

	const name = useForm();
	const email = useForm('email');
	const { loading, error, data, request } = useFetch();

	const handleSubmit = async () => {

		if (email.validate() && name.validate()) {

			const info = new FormData();
			info.append('name', name.value);
			info.append('email', email.value);

			const { url, options } = POST_UPDATE_USER(info);
			const { json, response } = await request(url, options);
		}
    
	};

	React.useEffect(() => {
		name.setValue(user?.name);
		email.setValue(user?.email);
	}, [user]);

	return (
		<Dialog
			open={open}
			fullWidth={true}
			maxWidth='sm'
			onClose={handleClose}
			sx={{
				'.MuiDialog-paper': {
					borderRadius: 4,
					padding: 2
				}
			}}
		>
			<DialogTitle
				variant='title3v1'
				sx={{ display: 'flex', flexDirection: 'column' }}
			>
				<ManageAccountsRoundedIcon
					sx={{ color: 'primary.main', marginBottom: 1 }}
				/>
				Atualizar informações
			</DialogTitle>
			<Stack
				component='form'
				sx={{
					display: 'flex',
					gap: 2,
					flexDirection: 'column',
					padding: '16px 24px'
				}}
			>
				<Input id='name' label='Nome' fullWidth {...name} />
				<Input id='email' label='Email' fullWidth {...email} />
			</Stack>
			{error && <p>{error}</p>}
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button onClick={handleSubmit} variant='contained' loading={loading}>
					Salvar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DashboardAccountModal;
