import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const LoadingAnimation = keyframes`
	to {
		transform: rotate(1turn);
	}
`;

const Avatar = styled.div`
	height: 160px;
	aspect-ratio: 4/4;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${({ image }) => image}) no-repeat center center;
	background-size: cover;
	position: relative;

	&::before {
		content: '';
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 100%;
		border: 5px solid;
		display: block;
		border-color: ${({ theme, loading }) =>
			loading ? theme.palette.primary.main : theme.palette.grey['200']};
		box-shadow: 0px 0px 4px 1px #0000001e;
		border-top-color: ${({ loading }) => (loading ? 'transparent' : '')};
		border-radius: 50%;
		animation: ${LoadingAnimation} ${({ loading }) => loading && '0.8s linear infinite'};
	}
`;

const UserAvatar = ({ loading, image }) => {
	return <Avatar loading={loading} role='img' image={image} />;
};

export default UserAvatar;
