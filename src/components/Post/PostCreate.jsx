import React from 'react';
import TextEditor from '../TextEditor';
import { Stack, Typography, Autocomplete, TextField } from '@mui/material';
import Input from '../Input';
import { GET_CATEGORIES } from '../../api/api';
import useFetch from '../../hooks/useFetch';

const PostCreate = () => {

	const { loading, data, error, request } = useFetch();

	const [categories, setCategories] = React.useState([]);
	const [value, setValue] = React.useState([]);

	React.useEffect(() => {

		const getData = async () => {
			const { url, options } = GET_CATEGORIES();
			const { json, response } = await request(url, options);

			if (response.ok) setCategories([...json.data]);
		};
		getData();
		
	}, []);

	return (
		<Stack spacing={6}>
			<Typography variant='title2v3'>Criar novo post</Typography>

			<Stack spacing={2}>
				<Stack spacing={1}>
					<Typography component='label' variant='title4v2'>
						Título
					</Typography>
					<Typography variant='body2' color='grey.600'>
						o título do seu post será a chamada do seu conteúdo. Lembre-se que
						ele deve ser curto e resumir a ideia principal do seu texto.
					</Typography>
				</Stack>
				<Input fullWidth />
			</Stack>

			<Stack spacing={2}>
				<Stack spacing={1}>
					<Typography component='label' variant='title4v2'>
						Categorias
					</Typography>
					<Typography variant='body2' color='grey.600'>
						o título do seu post será a chamada do seu conteúdo. Lembre-se que
						ele deve ser curto e resumir a ideia principal do seu texto.
					</Typography>
				</Stack>
				<Autocomplete
					value={value}
					onChange={(event, newValue) => setValue(newValue)}
					multiple
					id='categories'
					options={categories}
					defaultValue={[]}
					getOptionLabel={(option) => option.name}
					size='small'
					noOptionsText='Sem Resultados'
					filterSelectedOptions
					renderInput={(params) => (
						<Input {...params} placeholder='Categorias' />
					)}
				/>
			</Stack>

			<Stack spacing={2}>
				<Stack spacing={1}>
					<Typography component='label' variant='title4v2'>
						Conteúdo
					</Typography>
					<Typography variant='body2' color='grey.600'>
						o título do seu post será a chamada do seu conteúdo. Lembre-se que
						ele deve ser curto e resumir a ideia principal do seu texto.
					</Typography>
				</Stack>
				<TextEditor />
			</Stack>
		</Stack>
	);
};

export default PostCreate;
