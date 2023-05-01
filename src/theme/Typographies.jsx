import { grey, deepPurple } from '@mui/material/colors';

// Fontes
const title1v1 = {};

const title2v1 = {
	fontFamily: 'Inter',
	fontWeight: 600,
	fontSize: 32,
	color: grey[800],
	display: 'flex',
	position: 'relative',
	alignItems: 'flex-end',
	gap: '3px',
	'&:after': {
		content: "''",
		width: '6px',
		height: '6px',
		borderRadius: '50%',
		display: 'block',
		background: deepPurple['A200'],
		position: 'relative',
		top: '-8px'
	}
};

const title2v2 = {
	fontFamily: 'Inter',
	fontWeight: 600,
	fontSize: 32,
	color: grey[800],
	display: 'flex'
};

const title2v3 = {
	fontFamily: 'Inter',
	fontWeight: 600,
	textTransform: 'uppercase',
	fontSize: 24,
	color: grey[700],
	display: 'flex'
};

const title3v1 = {
	fontFamily: 'Inter',
	fontWeight: 600,
	fontSize: 24,
	color: grey[800],
	display: 'flex'
};

const title4v1 = {
	fontFamily: 'inter',
	fontWeight: 500,
	fontSize: 18
};

export default { title1v1, title2v1, title2v2, title3v1, title4v1, title2v3 };
