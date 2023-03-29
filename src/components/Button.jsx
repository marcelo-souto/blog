import React from 'react';
import { Button as Btn, keyframes } from '@mui/material';
import styled from '@emotion/styled';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const LoadingIcon = styled.div`
	width: 14px !important;
	height: 14px !important;
	margin: 3px 0;
	border-radius: 50%;
	border: 3px solid;
	border-color: ${({ theme }) => theme.palette.grey[400]};
	border-top-color: transparent;
	animation: ${rotate} 0.5s infinite linear;
`;

const Button = ({ children, variant, loading, onClick, ...props }) => {
	return (
		<>
			{!loading && (
				<Btn variant={variant} onClick={onClick} {...props}>
					{children}
				</Btn>
			)}
			{loading && (
				<Btn variant={variant} disabled onClick={onClick}>
					<LoadingIcon />
				</Btn>
			)}
		</>
	);
};

export default Button;
