import React from 'react';
import { Avatar, Stack, IconButton } from '@mui/material';
import Button from '../Button';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import { POST_UPDATE_USER } from '../../api/api';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

const UserAvatar = () => {

	const { user } = React.useContext(UserContext);
	const [image, setImage] = React.useState({});

  const { request } = useFetch();

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
						sx={{
							width: '100%',
							maxWidth: 160,
							height: '100%',
							border: '4px solid',
							borderColor: 'grey.200',
							boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.3)',
							aspectRatio: '4/4'
						}}
						alt={user.name}
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
