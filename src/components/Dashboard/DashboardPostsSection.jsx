import { Stack, Typography } from '@mui/material';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_POSTS } from '../../api/api';
import Loading from '../../helpers/Loading';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DashboardPostsSection = () => {
	const { loading, error, data, request } = useFetch();

	React.useEffect(() => {
		const getData = async () => {
			const { url, options } = GET_POSTS({ page: 1, user: 1 });
			await request(url, options);
		};
		getData();
	}, []);

	return (
		<Stack>
			<Typography variant='title2v3'>Meus Posts</Typography>
			{loading && <Loading />}
			<Stack
				component='ul'
				display='grid'
				gridTemplateColumns='1fr 1fr'
				gap={2}
				padding={0}
			>
				{data?.data?.map((post, index) => {
					return (
						<Stack
							component='li'
							p={3}
							flexDirection='row'
							bgcolor='#F5F5F5'
							borderRadius={3}
							alignItems='end'
              justifyContent='space-between'
							sx={{
								aspectRatio: '4/2'
							}}
							key={index}
						>
							<Typography variant='body1'>{post.title}</Typography>
							<Stack flexDirection='row' gap='4px' >
								<VisibilityIcon />
								<Typography>{post.views}</Typography>
							</Stack>
						</Stack>
					);
				})}
			</Stack>
		</Stack>
	);
};

export default DashboardPostsSection;
