import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Stack,
	Typography
} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import calculateTime from '../../functions/calculateTime';
import { Link } from 'react-router-dom';

const PostCard = ({ post, size }) => {
	return (
		<Link to={`/posts/${post.slug}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
			<Card
				sx={{
					display: 'flex',
					flexDirection: size === 'large' ? 'row' : 'column',
					borderRadius: 3,
					backgroundColor: 'grey.100',
					boxShadow: '0px 0px 2px 2px rgba(24, 24, 24, 0.075)'
				}}
			>
				<CardMedia
					component='img'
					alt={post.title}
					height='160'
					image={post.banner}
					sx={{ flex: size === 'large' ? '50%' : 'initial' }}
				/>
				<CardContent
					sx={{ padding: 2, flex: size === 'large' ? '50%' : 'initial' }}
				>
					<Stack
						direction='row'
						spacing={1}
						pb={2}
						mb={2}
						borderBottom='solid 2px'
						borderColor='grey.300'
					>
						<Stack
							direction='row'
							spacing={1}
							padding='3px 6px'
							bgcolor='white'
							borderRadius={2}
							alignItems='center'
						>
							<FavoriteRoundedIcon sx={{ color: 'grey.400', width: 16 }} />
							<Typography fontWeight='600' fontSize={14} color='grey.500'>
								{post.totalLikes}
							</Typography>
						</Stack>
						<Stack
							direction='row'
							spacing={1}
							padding='3px 6px'
							bgcolor='white'
							borderRadius={2}
							alignItems='center'
						>
							<VisibilityIcon sx={{ color: 'grey.400', width: 18 }} />
							<Typography fontWeight='600' fontSize={14} color='grey.500'>
								{post.views}
							</Typography>
						</Stack>
						<Stack
							direction='row'
							spacing={1}
							padding='3px 6px'
							bgcolor='white'
							borderRadius={2}
							alignItems='center'
						>
							<WatchLaterRoundedIcon sx={{ color: 'grey.400', width: 16 }} />
							<Typography fontWeight='600' fontSize={14} color='grey.500'>
								{calculateTime(post.createdAt)}
							</Typography>
						</Stack>
					</Stack>
					<Typography variant='body1' fontWeight={600} color='grey.800'>
						{post.title}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default PostCard;
