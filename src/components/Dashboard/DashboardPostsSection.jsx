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

	const [infinite, setInfinite] = React.useState(true);
	const [page, setPage] = React.useState(1);

	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		const getData = async () => {
			const { url, options } = GET_POSTS({ page, user: 1, limit: 2 });
			const { response, json } = await request(url, options);

			if (response.ok) {
				if(json.data.length === 0) setInfinite(false)
				setPosts([...posts, ...json.data]);
			}
		};

		getData();
	}, [page]);

	const handleClick = () => {
		setPage((page) => page + 1);
	};

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
			{posts && (
				<Stack
					component='ul'
					display='grid'
					gridTemplateColumns={`${changeGrid ? '1fr' : '1fr 1fr'}`}
					gap={4}
					padding={0}
				>
					{posts?.map((post, index) => (
						<PostCard post={post} size={changeGrid && 'large'} />
					))}
				</Stack>
			)}
			{loading && <Loading />}
			{!loading && infinite && (
				<Button
					variant='outlined'
					size='small'
					sx={{ width: 'max-content', alignSelf: 'end' }}
					onClick={handleClick}
				>
					Carregar Mais
				</Button>
			)}
			{!infinite && (
				<Typography mt={4} color='grey.500' textAlign='center'>
					Não há mais posts :(
				</Typography>
			)}
		</Stack>
	);
};

export default DashboardPostsSection;
