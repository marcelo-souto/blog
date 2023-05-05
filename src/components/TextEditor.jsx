import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';

const modules = {
	toolbar: [
		[{ font: [] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike'],
		[{ color: [] }, { background: [] }],
		[{ script: 'sub' }, { script: 'super' }],
		['blockquote', 'code-block'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ indent: '-1' }, { indent: '+1' }, { align: [] }],
		['link'],
		['clean']
	]
};

const Editor = styled(ReactQuill)`
	font-family: 'Inter', sans-serif;

	& .ql-toolbar {
		border-radius: 12px 12px 0 0;
		background-color: #f5f5f5;
	}

	& .ql-container {
		border-radius: 0 0 12px 12px;
		min-height: 220px;
		box-sizing: border-box;
	}

	& .ql-container:is(:hover) {
		border-color: #7c4dff;
	}
`;

const TextEditor = ({ value, onChange }) => {
	return (
		<Stack display='block'>
			<Editor modules={modules} value={value} onChange={onChange} />
		</Stack>
	);
};

export default TextEditor;
