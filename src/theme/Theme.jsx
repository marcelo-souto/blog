import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple, grey } from '@mui/material/colors';
import shadows from '@mui/material/styles/shadows';
import Typographies from './Typographies';

let theme = createTheme({
	palette: {
		primary: {
			main: deepPurple['A200'],
			contrastText: '#FFFFFF'
		},
		secondary: {
			main: deepPurple['100']
		},
		base: {
			main: grey[50]
		}
	},
	typography: {
		fontFamily: ['Roboto', 'Inter', 'sans-serif'].join(','),
		...Typographies
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 6
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					backgroundColor: grey[100],
					boxShadow: shadows[1],
					borderRadius: 8,
					'&.Mui-selected': {
						backgroundColor: deepPurple['A200'],
						color: '#FFF'
					},
					'&.Mui-selected .MuiListItemIcon-root': {
						color: '#FFF'
					},
					'&.Mui-selected:hover': {
						backgroundColor: deepPurple['A200']
					},
					'&:hover': {
						backgroundColor: deepPurple['A200'],
						color: '#FFF',
						'.MuiListItemIcon-root': {
							color: '#FFF'
						}
					}
				}
			}
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontFamily: 'Inter',
					fontWeight: 500
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: deepPurple['A200']
					}
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					padding: '8px 16px',
					textTransform: 'initial',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 500,
					transition: 'all .3s',
					'&.Mui-disabled': {
						backgroundColor: '#7045E5',
						color: deepPurple[100]
					}
				}
			}
		},
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					title2v1: 'h1',
					title2v2: 'h1'
				}
			}
		}
	}
});

export default theme;
