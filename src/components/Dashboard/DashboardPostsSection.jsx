import { Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_POSTS } from '../../api/api';
import Loading from '../../helpers/Loading';
import PostCard from '../Post/PostCard';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Button from '../Button';

const DashboardPostsSection = () => {
	const [changeGrid, setChangeGrid] = React.useState(false);
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
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography variant='title2v3'>Meus Posts</Typography>
				{changeGrid && (
					<IconButton
						aria-label='1 item por linha'
						onClick={() => setChangeGrid(false)}
					>
						<TableRowsRoundedIcon sx={{ color: 'grey.400' }} />
					</IconButton>
				)}
				{!changeGrid && (
					<IconButton
						aria-label='2 itens por linha'
						onClick={() => setChangeGrid(true)}
					>
						<GridViewRoundedIcon sx={{ color: 'grey.400' }} />
					</IconButton>
				)}
			</Stack>
			{loading && <Loading />}
			{!loading && data && (
				<Stack
					component='ul'
					display='grid'
					gridTemplateColumns={`${changeGrid ? '1fr' : '1fr 1fr'}`}
					gap={4}
					padding={0}
				>
					{data?.data?.map((post, index) => (
						<PostCard post={post} size={changeGrid && 'large'} />
					))}
				</Stack>
			)}
			<Button
				variant='outlined'
				size='small'
				sx={{ width: 'max-content', alignSelf: 'end' }}
			>
				Carregar Mais
			</Button>
		</Stack>
	);
};

export default DashboardPostsSection;
