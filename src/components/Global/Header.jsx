import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Avatar,
	Stack,
	Menu,
	MenuItem,
	ListItemIcon
} from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import React from 'react';
import Button from '../Button';
import { UserContext } from '../../context/UserContext';
import Link from '../Link';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Header = () => {
	const { login, user, userLogout } = React.useContext(UserContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = async () => {
		await userLogout()
		setAnchorEl(null)
	}

	return (
		<AppBar
			position='static'
			sx={{ backgroundColor: 'grey.100', boxShadow: 'none', zIndex: 99 }}
		>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					maxWidth: 960,
					width: '100%',
					boxSizing: 'border-box',
					margin: '0 auto'
				}}
			>
				<Button
					component={Link}
					startIcon={<StickyNote2OutlinedIcon />}
					to='/'
					variant='text'
					size='small'
				>
					PostIt
				</Button>

				{login && user && (
					<IconButton component={Link} to='/dashboard' onClick={handleClick}>
						<Avatar
							alt={user.name}
							src={user.avatar.url}
							sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}
						>
							M
						</Avatar>
					</IconButton>
				)}

				{!login && (
					<Stack direction='row' spacing={2}>
						<Button
							component={Link}
							size='small'
							to='/login/register'
							variant='outlined'
							disableElevation
						>
							Inscreva-se
						</Button>
						<Button
							component={Link}
							size='small'
							to='/login'
							variant='contained'
							disableElevation
							endIcon={<LoginRoundedIcon />}
						>
							Login
						</Button>
					</Stack>
				)}

				<Menu
					anchorEl={anchorEl}
					id='account-menu'
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
							borderRadius: 2,
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0
							}
						}
					}}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				>
					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<ExitToAppRoundedIcon fontSize='small' />
						</ListItemIcon>
						Sair
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
