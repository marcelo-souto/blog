import React from 'react';
import { UserContext } from '../../context/UserContext';
import UserAvatar from '../Dashboard/UserAvatar';

import {
	ListItemIcon,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	Typography,
	IconButton,
	useMediaQuery
} from '@mui/material';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import { Link } from 'react-router-dom';

const DashboardMenu = () => {
	const { user } = React.useContext(UserContext);
	const [menuSelected, setMenuSelected] = React.useState(null);

	const mobile = useMediaQuery('(max-width:600px)');

	const handleClick = (e) => {
		setMenuSelected(e.target.innerText);
	};

	return (
		<Stack pt={6} maxWidth={260} width='100%'>
			<Stack alignItems='center' justifyContent='center'>
				<UserAvatar />
				<Typography color='grey.800' mt={3} mb={1} variant='h6' component='p'>
					Olá, {user.name.split(' ')[0]}
				</Typography>
			</Stack>
			<List>
				<ListItem component={Link} to='posts'>
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
				<ListItem component={Link} to='account'>
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
				<ListItem component={Link} to='statistics'>
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
