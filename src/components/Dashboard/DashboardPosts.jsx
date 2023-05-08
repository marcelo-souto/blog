import React from 'react';
import { Stack, Typography } from '@mui/material';
import Button from '../Button';
import styled from '@emotion/styled';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PostCreate from '../Post/PostCreate';
import DashboardPostsSection from './DashboardPostsSection';

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

	const [createPost, setCreatePost] = React.useState(false);

	const handleClick = () => {
		setCreatePost(true);
	};

	if (createPost) return <PostCreate />;
	return (
		<Stack gap={6}>
			<Box borderRadius={3} bgcolor='#f5f5f5'>
				<Typography variant='title4v1' color='grey.800'>
					Novas ideias?{' '}
					<Typography variant='title4v1' color='grey.600'>
						Compartilhe.
					</Typography>
				</Typography>
				<Button
					onClick={handleClick}
					variant='contained'
					startIcon={<AddCircleOutlineOutlinedIcon />}
				>
					Novo post
				</Button>
			</Box>
			<DashboardPostsSection />
		</Stack>
	);
};

export default DashboardPosts;
