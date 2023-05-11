import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_POST } from '../api/api';
import useFetch from '../hooks/useFetch';
import Loading from '../helpers/Loading';
import { Typography, Stack } from '@mui/material';

const PostPage = () => {
	const { slug } = useParams();
	const { loading, data, error, request } = useFetch();

	React.useEffect(() => {
		const getData = async () => {
			const { url, options } = GET_POST(slug);
			await request(url, options);
		};

		getData();
	}, [slug]);

	if (loading) return <Loading />;
	return (
		<Stack maxWidth={960} width='100%' margin='0 auto'>
			<Typography variant='title2v1'>{data?.data?.title}</Typography>
			<div dangerouslySetInnerHTML={{ __html: data?.data?.content }}></div>
		</Stack>
	);
};

export default PostPage;
