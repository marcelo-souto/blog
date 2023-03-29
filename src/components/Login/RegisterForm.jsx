import React, { useState } from 'react';
import Button from '../Button';
import {
	InputAdornment,
	Typography,
	IconButton,
	Stack,
	Alert
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Input from '../Input';
import Link from '../Link';
import { POST_CREATE_USER } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const { loading, data, error, request } = useFetch();
	const navigate = useNavigate();

	const name = useForm();
	const email = useForm('email');
	const password = useForm('password');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (name.validate() && email.validate() && password.validate()) {
			const { url, options } = POST_CREATE_USER({
				name: name.value,
				email: email.value,
				password: password.value,
				role: 'user'
			});

			const { response } = await request(url, options);
			if (response.ok) navigate('/login');
		}
	};

	return (
		<Stack
			component='main'
			autoComplete='off'
			margin='0 auto'
			maxWidth='340px'
			width='100%'
			minHeight='100%'
			justifyContent='center'
		>
			<Typography mb={1} variant='title2v1'>
				Crie uma conta
			</Typography>
			<Typography mb={4} color='grey.600' variant='subtitle1'>
				Seja bem vindo a nossa plataforma.
			</Typography>
			<div>
				<Stack component='form' spacing={3} onSubmit={handleSubmit}>
					<Input
						id='name'
						label='Nome'
						variant='outlined'
						size='small'
						fullWidth
						{...name}
					/>
					<Input
						id='email'
						label='Email'
						variant='outlined'
						size='small'
						fullWidth
						{...email}
					/>

					<Input
						id='password'
						label='Senha'
						variant='outlined'
						size='small'
						type={showPassword ? 'text' : 'password'}
						fullWidth
						{...password}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										edge='end'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
					{error && <Alert severity='error'>{error}</Alert>}
					<Button type='submit' loading={loading} variant='contained'>
						Enviar
					</Button>
				</Stack>
				<Typography variant='body1' color='grey.700' textAlign='center' mt={3}>
					Já tem uma conta? <Link to='/login'>Faça login</Link>
				</Typography>
			</div>
		</Stack>
	);
};

export default RegisterForm;
