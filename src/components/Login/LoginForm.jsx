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
import Input from '../Input';
import Link from '../Link';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	const { userLogin, loading, error } = React.useContext(UserContext);

	const email = useForm('email');
	const password = useForm('password');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email.validate() && password.validate()) {
			await userLogin(email.value, password.value);
		}
	};

	return (
		<Stack
			component='main'
			margin='0 auto'
			maxWidth='340px'
			width='100%'
			minHeight='100%'
			justifyContent='center'
		>
			<Typography mb={1} variant='title2v1'>
				Entre na sua conta
			</Typography>
			<Typography mb={4} color='grey.600' variant='subtitle1'>
				Seja bem vindo de volta.
			</Typography>
			<div>
				<Stack component='form' spacing={3} onSubmit={handleSubmit}>
					<Input
						id='email'
						label='Email'
						variant='outlined'
						size='small'
						fullWidth
						{...email}
					/>
					<Stack>
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
						<Link
							style={{ alignSelf: 'end', marginTop: '8px' }}
							to='/login/forgetpassword'
						>
							esqueci minha senha
						</Link>
					</Stack>
					{error && <Alert severity='error'>{error}</Alert>}
					<Button
						type='submit'
						loading={loading}
						variant='contained'
						endIcon={<LoginRoundedIcon />}
					>
						Login
					</Button>
				</Stack>
				<Typography variant='body1' color='grey.700' textAlign='center' mt={3}>
					Não tem uma conta? <Link to='/login/register'>Cadastre-se</Link>
				</Typography>
			</div>
		</Stack>
	);
};

export default LoginForm;
