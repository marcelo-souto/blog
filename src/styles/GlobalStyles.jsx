import { GlobalStyles as Global } from '@mui/material';

export const styles = {
	body: {
		margin: 0,
		padding: 0,
		minHeight: '100vh'
	}
};

const GlobalStyles = () => {
	return <Global styles={styles} />;
};

export default GlobalStyles
