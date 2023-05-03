import React from 'react';
import { Stack, IconButton } from '@mui/material';
import Button from '../Button';
import { UserContext } from '../../context/UserContext';
import useFetch from '../../hooks/useFetch';
import { POST_UPDATE_USER } from '../../api/api';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import UserAvatar from './UserAvatar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { updateAvatar } from '../../store/user/user';

const UserAvatarDashboard = () => {
	const { data } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [image, setImage] = React.useState({});

	const { request, error, loading } = useFetch();

	const handleUserPhotoUpload = async () => {
		const formData = new FormData();
		formData.append('upload', image.raw);

		const { url, options } = POST_UPDATE_USER(formData);
		const { response } = await request(url, options);

		if (response.ok) {
			dispatch(updateAvatar(image.preview))
			setImage({});
		}
	};

	const handleUserPhoto = ({ target }) => {
		setImage({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0]
		});
	};

	return (
		<>
			{data && (
				<Stack display='block' position='relative'>
					<UserAvatar
						loading={loading}
						image={image.preview || data.avatar.url}
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

export default UserAvatarDashboard;
