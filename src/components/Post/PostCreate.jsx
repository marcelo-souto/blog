import React from 'react';
import TextEditor from '../TextEditor';
import { Stack, Typography, Autocomplete } from '@mui/material';
import Input from '../Input';
import { GET_CATEGORIES, POST_CREATE_POST } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Button from '../Button';

const PostCreate = () => {
	const { loading, data, error, request } = useFetch();

	const [form, setForm] = React.useState({
		title: '',
		categories: [],
		banner: '',
		content: ''
	});

	const disabled = !form.title || !form.content || !form.categories.length > 0;

	React.useEffect(() => {
		const getData = async () => {
			const { url, options } = GET_CATEGORIES();
			await request(url, options);
		};
		getData();
	}, []);

	const handleClick = async () => {
		
		if (!disabled) {
			try {
				const categories = form.categories.map((item) => item.categoryId);

				const { url, options } = POST_CREATE_POST({ ...form, categories });
				const response = await fetch(url, options);
				const json = await response.json();

				console.log(json);
			} catch (error) {
				console.log(error);
			}
		}
	};

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
				<Input
					value={form.title}
					onChange={({ target }) => setForm({ ...form, title: target.value })}
					placeholder='Ex.: O mercado de trabalho no sec. XXI'
					fullWidth
				/>
			</Stack>

			<Stack spacing={2}>
				<Stack spacing={1}>
					<Typography component='label' variant='title4v2'>
						Banner
					</Typography>
					<Typography variant='body2' color='grey.600'>
						o título do seu post será a chamada do seu conteúdo. Lembre-se que
						ele deve ser curto e resumir a ideia principal do seu texto.
					</Typography>
				</Stack>
				<Input
					value={form.banner}
					onChange={({ target }) => setForm({ ...form, banner: target.value })}
					placeholder='Ex.: https://www.usuario.com/minhaimagem.png'
					fullWidth
				/>
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
					value={form.categories}
					onChange={(event, newValue) =>
						setForm({ ...form, categories: newValue })
					}
					multiple
					id='categories'
					options={data?.data || []}
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
				<TextEditor
					value={form.content}
					onChange={(value) => setForm({ ...form, content: value })}
				/>
			</Stack>
			<Button variant='contained' onClick={handleClick} disabled={disabled}>
				Postar
			</Button>
		</Stack>
	);
};

export default PostCreate;
