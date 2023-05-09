import {
	Stack,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
	CardActions,
	IconButton
} from '@mui/material';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_POSTS } from '../../api/api';
import Loading from '../../helpers/Loading';

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
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
				gap={4}
				padding={0}
			>
				{data?.data?.map((post, index) => {
					return (
						<Card
							sx={{
								maxWidth: 345,
								borderRadius: 3,
								backgroundColor: 'grey.100',
								boxShadow: '0px 0px 2px 2px rgba(24, 24, 24, 0.075)'
							}}
						>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='green iguana'
									height='160'
									image={post.banner}
								/>
								<CardContent sx={{ padding: 3 }}>
									<Stack direction='row' spacing={1}>
										<Stack
											direction='row'
											spacing={1}
											padding='3px 6px'
											bgcolor='white'
											borderRadius={2}
										>
											<FavoriteRoundedIcon sx={{ color: 'grey.400' }} />
											<Typography fontWeight='600' color='grey.500'>
												{post.totalLikes}
											</Typography>
										</Stack>
										<Stack
											direction='row'
											spacing={1}
											padding='3px 6px'
											bgcolor='white'
											borderRadius={2}
										>
											<VisibilityIcon sx={{ color: 'grey.400' }} />
											<Typography fontWeight='600' color='grey.500'>
												{post.views}
											</Typography>
										</Stack>
									</Stack>
									<Typography variant='body1' fontWeight={600}>
										{post.title}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
			</Stack>
		</Stack>
	);
};

export default DashboardPostsSection;
