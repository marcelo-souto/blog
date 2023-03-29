import React, { useState } from 'react';
import Button from '../Button';
import { Typography, Stack, Alert } from '@mui/material';
import useForm from '../../hooks/useForm';
import Input from '../Input';
import Link from '../Link';
import useFetch from '../../hooks/useFetch';
import { POST_FORGET_PASSWORD } from '../../api/api';

const ForgetPasswordForm = () => {
	const { loading, data, error, request } = useFetch();
	const email = useForm('email');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email.validate()) {
			const { url, options } = POST_FORGET_PASSWORD({ email: email.value });
			await request(url, options);
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
			<Typography mb={1} variant='title2v2'>
				Esqueceu a senha?
			</Typography>
			<Typography mb={4} color='grey.600' variant='subtitle1'>
				Insira seu email abaixo para recuperá-la:
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
					{!data && error && <Alert severity='error'>{error}</Alert>}
					{!error && data && <Alert severity='success'>{data.message}</Alert>}
					{!data && (
						<Button type='submit' loading={loading} variant='contained'>
							Enviar
						</Button>
					)}
					{data && (
						<Button href='/login' loading={loading} variant='contained'>
							Ir para login
						</Button>
					)}
				</Stack>
				<Typography variant='body1' color='grey.700' textAlign='center' mt={3}>
					Lembrou sua senha? <Link to='/login'>Faça login</Link>
				</Typography>
			</div>
		</Stack>
	);
};

export default ForgetPasswordForm;
