import React from 'react';
import styled from 'styled-components';
import StackGrid, { transitions, easings } from 'react-stack-grid';

// components
const transition = transitions.scaleUp;
const MainBackList = ({ style }) => {
	return (
		<Container style={style}>
			<StackGrid
				monitorImagesLoaded
				columnWidth={240}
				appear={transition.appear}
				appeared={transition.appeared}
				enter={transition.enter}
				entered={transition.entered}
				leaved={transition.leaved}
				easing={easings.cubicOut}
				duration={80}
				appearDelay={1}
			>
				<ImgCard key='key1'>Item 1</ImgCard>
				<ImgCard key='key2' style={{ backgroundColor: '#fff' }}>
					Item 2
				</ImgCard>
				<ImgCard key='key3'>Item 3</ImgCard>
				<ImgCard key='key4'>Item 4</ImgCard>
				<ImgCard key='key5'>Item 5</ImgCard>
				<ImgCard key='key6'>Item 6</ImgCard>
				<ImgCard key='key7'>Item 7</ImgCard>
				<ImgCard key='key8'>Item 8</ImgCard>
				<ImgCard key='key9'>Item 9</ImgCard>
				<ImgCard key='key10'>Item 10</ImgCard>
				<ImgCard key='key11'>Item 11</ImgCard>
				<ImgCard key='key12'>Item 12</ImgCard>
				<ImgCard key='key13'>Item 13</ImgCard>
				<ImgCard key='key14'>Item 14</ImgCard>
				<ImgCard key='key15'>Item 15</ImgCard>
				<ImgCard key='key16'>Item 16</ImgCard>
				<ImgCard key='key17'>Item 17</ImgCard>
				<ImgCard key='key18'>Item 18</ImgCard>
				<ImgCard key='key19'>Item 19</ImgCard>
				<ImgCard key='key20'>Item 20</ImgCard>
				<ImgCard key='key21'>Item 21</ImgCard>
				<ImgCard key='key22'>Item 21</ImgCard>
				<ImgCard key='key23'>Item 21</ImgCard>
				<ImgCard key='key24'>Item 21</ImgCard>
				<ImgCard key='key26'>Item 21</ImgCard>
				<ImgCard key='key27'>Item 21</ImgCard>
				<ImgCard key='key28'>Item 21</ImgCard>
				<ImgCard key='key29'>Item 21</ImgCard>
				<ImgCard key='key30'>Item 21</ImgCard>
				<ImgCard key='key31'>Item 20</ImgCard>
				<ImgCard key='key32'>Item 21</ImgCard>
				<ImgCard key='key33'>Item 21</ImgCard>
				<ImgCard key='key34'>Item 21</ImgCard>
				<ImgCard key='key35'>Item 21</ImgCard>
				<ImgCard key='key36'>Item 21</ImgCard>
				<ImgCard key='key37'>Item 21</ImgCard>
				<ImgCard key='key38'>Item 21</ImgCard>
				<ImgCard key='key39'>Item 21</ImgCard>
				<ImgCard key='key40'>Item 21</ImgCard>
				<ImgCard key='key41'>Item 21</ImgCard>
				<ImgCard key='key42'>Item 20</ImgCard>
				<ImgCard key='key42'>Item 21</ImgCard>
				<ImgCard key='key44'>Item 21</ImgCard>
				<ImgCard key='key45'>Item 21</ImgCard>
				<ImgCard key='key46'>Item 21</ImgCard>
				<ImgCard key='key47'>Item 21</ImgCard>
				<ImgCard key='key48'>Item 21</ImgCard>
				<ImgCard key='key49'>Item 21</ImgCard>
				<ImgCard key='key50'>Item 21</ImgCard>
				<ImgCard key='key51'>Item 21</ImgCard>
			</StackGrid>
		</Container>
	);
};

const Container = styled.section`
	position: absolute;
	overflow: hidden;
	top: 400px;
	width: 80%;
`;

const ImgCard = styled.section`
	height: 300px;
	margin: 0px 8px 40px;
	border-radius: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
	background-color: #ddd;
	cursor: default;
`;

export default MainBackList;
