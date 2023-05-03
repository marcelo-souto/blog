import React from 'react';
import { UserContext } from '../../context/UserContext';

import {
	ListItemIcon,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	Typography
} from '@mui/material';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import { Link, useLocation } from 'react-router-dom';
import UserAvatarDashboard from './UserAvatarDashboard';
import { useSelector } from 'react-redux';

const DashboardMenu = ({ mobile }) => {
	const { data } = useSelector((state) => state.user);
	const { pathname } = useLocation();

	return (
		<Stack
			sx={{
				paddingTop: mobile ? '0px' : '42px',
				maxWidth: mobile ? '100%' : '260px',
				width: '100%',
				position: mobile && 'fixed',
				bottom: 0
			}}
		>
			<Stack alignItems='center' justifyContent='center'>
				{!mobile && (
					<>
						<UserAvatarDashboard />
						<Typography
							color='grey.800'
							mt={3}
							mb={1}
							variant='h6'
							component='p'
						>
							Olá, {data.name.split(' ')[0]}
						</Typography>
					</>
				)}
			</Stack>
			<List sx={{ display: mobile && 'flex' }}>
				<ListItem
					component={Link}
					to=''
					sx={
						mobile && {
							'& .MuiListItemButton-root': {
								justifyContent: 'center'
							},
							'& .MuiListItemIcon-root': {
								justifyContent: 'center',
								minWidth: mobile && 'max-content'
							}
						}
					}
				>
					<ListItemButton selected={/dashboard\/?$/.test(pathname)}>
						<ListItemIcon>
							<StickyNote2OutlinedIcon />
						</ListItemIcon>
						<ListItemText
							primary='Meus Posts'
							sx={{ display: mobile && 'none' }}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem
					component={Link}
					to='account'
					sx={
						mobile && {
							'& .MuiListItemButton-root': {
								justifyContent: 'center'
							},
							'& .MuiListItemIcon-root': {
								justifyContent: 'center',
								minWidth: mobile && 'max-content'
							}
						}
					}
				>
					<ListItemButton selected={pathname.includes('account')}>
						<ListItemIcon>
							<AccountCircleOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							primary='Minha Conta'
							sx={{ display: mobile && 'none' }}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem
					component={Link}
					to='statistics'
					sx={
						mobile && {
							'& .MuiListItemButton-root': {
								justifyContent: 'center'
							},
							'& .MuiListItemIcon-root': {
								justifyContent: 'center',
								minWidth: 'max-content'
							}
						}
					}
				>
					<ListItemButton
						selected={pathname.includes('statistics')}
						sx={{ justifyContent: mobile && 'center' }}
					>
						<ListItemIcon>
							<AssessmentOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							primary='Estatistícas'
							sx={{ display: mobile && 'none' }}
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</Stack>
	);
};

export default DashboardMenu;
