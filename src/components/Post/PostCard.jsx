import React from 'react';
import { Card, CardMedia, CardContent, Stack, Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import calculateTime from '../../functions/calculateTime';
import { Link } from 'react-router-dom';

const PostCard = ({ post, size }) => {
	return (
		<Link
			to={`/posts/${post.slug}`}
			style={{ textDecoration: 'none', cursor: 'pointer' }}
		>
			<Card
				sx={{
					display: 'flex',
					flexDirection: size === 'large' ? 'row' : 'column',
					height: '100%',
					boxShadow: 'none'
				}}
			>
				<CardMedia
					component='img'
					alt={post.title}
					image={post.banner}
					sx={{
						height: '100%',
						borderRadius: 3,
						maxHeight: size === 'large' ? 260 : 180,
						width: '100%',
						maxWidth: 320
					}}
				/>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: size === 'large' ? '0px 16px' : '16px 0px'
					}}
				>
					<Stack
						direction='row'
						spacing={1}
						padding={size === 'large' ? '16px 0 0 0' : '0 0 16px 0'}
						margin={size === 'large' ? '16px 0 0 0' : '0 0 16px 0'}
						borderBottom={size === 'large' ? 'none' : 'solid 2px #F5F5F5'}
						borderTop={size === 'large' ? 'solid 2px #F5F5F5' : 'none'}
						order={size === 'large' ? 2 : 'initial'}
					>
						<Stack
							direction='row'
							spacing={1}
							padding='4px 8px'
							bgcolor='#F2EEFF'
							borderRadius={2}
							alignItems='center'
						>
							<FavoriteRoundedIcon
								sx={{ color: 'grey.400', width: 16, color: '#9773FC' }}
							/>
							<Typography fontWeight='600' fontSize={14} color='#9773FC'>
								{post.totalLikes}
							</Typography>
						</Stack>
						<Stack
							direction='row'
							spacing={1}
							padding='4px 8px'
							bgcolor='#F2EEFF'
							borderRadius={2}
							alignItems='center'
						>
							<VisibilityIcon
								sx={{ color: 'grey.400', width: 18, color: '#9773FC' }}
							/>
							<Typography fontWeight='600' fontSize={14} color='#9773FC'>
								{post.views}
							</Typography>
						</Stack>
						<Stack
							direction='row'
							spacing={1}
							padding='4px 8px'
							bgcolor='#F2EEFF'
							borderRadius={2}
							alignItems='center'
						>
							<WatchLaterRoundedIcon
								sx={{ color: 'grey.400', width: 16, color: '#9773FC' }}
							/>
							<Typography fontWeight='600' fontSize={14} color='#9773FC'>
								{calculateTime(post.createdAt)}
							</Typography>
						</Stack>
					</Stack>

					<Typography
						variant='body1'
						order={1}
						fontWeight={600}
						color='grey.600'
					>
						{post.title}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default PostCard;
