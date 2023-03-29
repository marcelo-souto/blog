import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
	font-family: ${(props) => props.theme.typography.fontFamily};
	color: ${(props) => props.theme.palette.primary.main};
	text-decoration: underline;
`;

export default Link;