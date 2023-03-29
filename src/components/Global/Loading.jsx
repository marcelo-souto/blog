import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearLoading() {
	return (
		<Box sx={{ width: '100vw', position: 'absolute', zIndex: 1000, top: 0 }}>
			<LinearProgress />
		</Box>
	);
}
