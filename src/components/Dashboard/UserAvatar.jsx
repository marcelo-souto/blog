import React from 'react';
import { Stack, IconButton } from '@mui/material';
import Button from '../Button';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import { POST_UPDATE_USER } from '../../api/api';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const LoadingAnimation = keyframes`
	to {
		transform: rotate(1turn);
	}
`;

const Avatar = styled.div`
	height: 160px;
	aspect-ratio: 4/4;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	background: url(${(props) => props.src}) no-repeat center center;
	background-size: cover;
	position: relative;

	&::before {
		content: '';
		z-index: -1;

		position: absolute;
		width: 100%;
		height: 100%;

		border: 5px solid;
		display: block;
		border-color: ${({ theme, loading }) =>
			loading ? theme.palette.primary.main : theme.palette.grey['200']};
		box-shadow: 0px 0px 4px 1px #0000001e;
		border-top-color: ${({ loading }) => (loading ? 'transparent' : '')};
		border-radius: 50%;

		animation: ${LoadingAnimation} ${({ loading }) => loading && '0.8s linear infinite'};
	}
`;

const UserAvatar = () => {
	const { user } = React.useContext(UserContext);
	const [image, setImage] = React.useState({});

	const { request, error, loading } = useFetch();

	const handleUserPhotoUpload = async () => {
		const formData = new FormData();
		formData.append('upload', image.raw);

		const { url, options } = POST_UPDATE_USER(formData);
		await request(url, options);
	};

	const handleUserPhoto = ({ target }) => {
		setImage({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0]
		});
	};

	return (
		<>
			{user && (
				<Stack display='block' position='relative'>
					<Avatar
						loading={loading}
						role='img'
						src={image.preview ? image.preview : user.avatar.url}
					/>

					<IconButton
						size='small'
						component='label'
						sx={{
							backgroundColor: 'grey.200',
							position: 'absolute',
							right: '8px',
							bottom: '8px',
							'&.MuiIconButton-root:hover': {
								backgroundColor: 'grey.300'
							}
						}}
					>
						<input
							onChange={handleUserPhoto}
							accept='image/jpeg, image/png'
							hidden
							type='file'
						/>
						<CameraAltRoundedIcon />
					</IconButton>
				</Stack>
			)}
			{image.raw && (
				<Stack direction='row' spacing={2} mt={2}>
					<Button
						onClick={handleUserPhotoUpload}
						sx={{ color: 'success.main' }}
					>
						Enviar
					</Button>
					<Button onClick={() => setImage({})} sx={{ color: 'error.main' }}>
						Cancelar
					</Button>
				</Stack>
			)}
		</>
	);
};

export default UserAvatar;
