import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const loadingAnimation = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Loading = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 8px solid;
	border-color: #e4e4ed;
	border-right-color: ${({ theme }) => theme.palette.primary.main};
	animation: ${loadingAnimation} 1s infinite linear;
`;

export default Loading;
