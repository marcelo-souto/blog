import React from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';

import Image1 from '../img/1.jpg';
import Image2 from '../img/2.jpg';
import Image3 from '../img/3.jpg';

const slides = [
	{
		image: Image1,
		comment: 'Eu posso compartilhar minhas ideias livremente e ser ouvido aqui',
		name: 'Luiz Costa'
	},
	{
		image: Image2,
		comment: 'Uma comunidade onde posso compatilhar ideais',
		name: 'Maria de Souza'
	},
	{
		image: Image3,
		comment: 'A comunidade desta plataforma é tão acolhedora e prestativa',
		name: 'Luciana e Marta'
	}
];

const SlideContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
	position: relative;
`;

const SlideContent = styled.div`
	display: flex;
	flex: 1;
	transform: ${({ position }) => `translateX(${position}px)`};
	transition: all 0.3s;
`;

const SlideItem = styled.div`
	flex-shrink: 0;
	width: 100%;
	background: linear-gradient(
			to bottom,
			rgba(245, 245, 245, 0.01) 75%,
			rgba(0, 0, 0, 0.5)
		),
		url(${({ image }) => image}) no-repeat center center;

	background-size: cover;
	position: relative;
`;

const SlideControls = styled.div`
	display: flex;
	justify-content: end;
	position: absolute;
	bottom: 64px;
	right: 64px;
	gap: 12px;
`;

const SliderDot = styled.button`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	border: none;
	outline: none;
	transition: all 0.9s;
	cursor: pointer;
	background-color: ${({ active }) =>
		active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)'};
`;

const Carousel = () => {
	const [activeSlide, setActiveSlide] = React.useState(0);
	const [position, setPosition] = React.useState(0);
	const contentRef = React.useRef();

	React.useEffect(() => {
		const { width } = contentRef.current.getBoundingClientRect();
		setPosition(-(width * activeSlide));
	}, [activeSlide]);

	function slideNext() {
		if (activeSlide < slides.length - 1) {
			setActiveSlide(activeSlide + 1);
		} else {
			setActiveSlide(0);
		}
	}

	function slidePrev() {
		if (activeSlide > 0) {
			setActiveSlide(activeSlide - 1);
		} else {
			setActiveSlide(slides.length - 1);
		}
	}

	function goToSlide(index) {
		setActiveSlide(index);
	}

	React.useEffect(() => {
		const interval = setInterval(() => {
			slideNext();
		}, 5000);

		return () => clearInterval(interval);
	}, [activeSlide]);

	return (
		<SlideContainer>
			<SlideContent position={position} ref={contentRef}>
				{slides.map(({ image, comment, name }, index) => (
					<SlideItem image={image} key={index}>
						<Stack position='absolute' bottom={64} left={64}>
							<Typography
								variant='h4'
								component='p'
								fontFamily='Inter'
								fontWeight={600}
								maxWidth={600}
								color='grey.300'
								lineHeight={1.4}
							>
								{comment}
								<Typography
									variant='h1'
									lineHeight={0}
									component='span'
									color='primary.main'
								>
									.
								</Typography>
							</Typography>
							<Typography
								variant='body1'
								mt={2}
								fontStyle='italic'
								color='rgba(255,255,255, 0.5)'
							>
								{name}
							</Typography>
						</Stack>
					</SlideItem>
				))}
			</SlideContent>

			<SlideControls>
				{slides.map((_, index) => {
					return (
						<SliderDot
							active={activeSlide === index}
							key={index}
							onClick={() => goToSlide(index)}
						/>
					);
				})}
			</SlideControls>
		</SlideContainer>
	);
};

export default Carousel;
