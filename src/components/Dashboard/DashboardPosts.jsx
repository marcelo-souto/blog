import React from 'react';
import { Stack, Typography } from '@mui/material';
import Button from '../Button';
import styled from '@emotion/styled';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Box = styled(Stack)`
	padding: 1.8rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 12px;
	box-shadow: 0px 0px 2px 2px rgba(24, 24, 24, 0.075);
`;

const DashboardPosts = () => {
	return (
		<Stack>
			<Box borderRadius={3} bgcolor='#f5f5f5'>
				<Typography variant='title4v1' color='grey.800'>
					Novas ideias?{' '}
					<Typography variant='title4v1' color='grey.600'>
						Compartilhe.
					</Typography>
				</Typography>
				<Button
					variant='contained'
					startIcon={<AddCircleOutlineOutlinedIcon />}
				>
					Novo post
				</Button>
			</Box>
		</Stack>
	);
};

export default DashboardPosts;
