import React from 'react';

import { UserContext } from '../../context/UserContext';
import { POST_UPDATE_USER } from '../../api/api';

import useFetch from '../../hooks/useFetch';
import Button from '../../components/Button';

import {
	Grid,
	ListItemIcon,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Avatar,
	Stack,
	Typography,
	IconButton
} from '@mui/material';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';

const DashboardMenu = () => {
	const { user, userLogout } = React.useContext(UserContext);
	const [menuSelected, setMenuSelected] = React.useState(null);
	const [image, setImage] = React.useState({});

	const { data, error, loading, request } = useFetch();

	const handleUserPhotoUpload = async () => {
		const formData = new FormData();
		formData.append('upload', image.raw);

		const { url, options } = POST_UPDATE_USER(formData);
		const { json, response } = await request(url, options);
	};

	const handleUserPhoto = ({ target }) => {
		setImage({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0]
		});
	};

	const handleClick = (e) => {
		setMenuSelected(e.target.innerText);
	};

	return (
		<Stack padding={2} pt={6} flexBasis={320}>
			<Stack alignItems='center' justifyContent='center'>
				{user && (
					<Stack display='block' position='relative'>
						<Avatar
							sx={{
								width: '100%',
								maxWidth: 220,
								height: '100%',
								maxHeight: 220,
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
								right: '16px',
								bottom: '16px',
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
				<Typography color='grey.800' mt={2} variant='h6' component='p'>
					{user.name}
				</Typography>
			</Stack>
			<List>
				<ListItem>
					<ListItemButton
						onClick={handleClick}
						selected={menuSelected === 'Meus Posts'}
					>
						<ListItemIcon>
							<StickyNote2OutlinedIcon />
						</ListItemIcon>
						<ListItemText primary='Meus Posts' />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton
						onClick={handleClick}
						selected={menuSelected === 'Minha Conta'}
					>
						<ListItemIcon>
							<AccountCircleOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary='Minha Conta' />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton
						onClick={handleClick}
						selected={menuSelected === 'Estatistícas'}
					>
						<ListItemIcon>
							<AssessmentOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary='Estatistícas' />
					</ListItemButton>
				</ListItem>
			</List>
		</Stack>
	);
};

export default DashboardMenu;
