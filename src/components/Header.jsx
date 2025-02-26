import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// elements & components
import { Flex, Image, Input, Button, Icons } from '../elem';
import Dropdown from './Dropdown';

const Header = (props) => {
	// 메뉴 펼치기 토글
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const toggleMenuField = () => {
		setIsMenuVisible((setIsMenuVisible) => !setIsMenuVisible);
	};

	// 스크롤 구독, 헤더 고정 후 스크롤 시 그림자
	const [isScrolled, setIsScrolled] = useState(false);
	const scrollListener = () => {
		setIsScrolled(window.pageYOffset > 0);
	};
	useEffect(() => {
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, []);

	// 위로 가기 버튼
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<Container className={isScrolled ? 'scrolled' : ''}>
			{/* 좌: 홈으로 가기 */}
			<Flex width={'128px'}>
				<Button
					height={'48px'}
					type={'circle'}
					color={'var(--primary-red)'}
					_onClick={() => {
						window.location.replace('/');
					}}
				>
					<Icons.Logo color='var(--primary-red)' />
				</Button>

				<Button
					children={'홈'}
					height={'48px'}
					tertiary
					_onClick={() => {
						window.location.replace('/');
					}}
				/>
			</Flex>
			{/* 중: 검색 */}
			<Flex width={'calc(100vw - 336px)'}>
				<Input width='100%' header placeholder='검색' mg='0px 8px' />
			</Flex>
			{/* 우: 개인 메뉴 */}
			<Flex width={'200px'}>
				<Button height='48px' type='circle'>
					<Icons.Notification color='var(--primary-gray)' />
				</Button>
				<Button height='48px' type='circle'>
					<Icons.Message color='var(--primary-gray)' />
				</Button>
				<Button height='48px' type='circle'>
					<Image shape='circle' />
				</Button>
				<Button height='48px' type='circle' _onClick={toggleMenuField}>
					<Icons.ArrowDown color='var(--primary-black)' />
				</Button>
			</Flex>
			{/* 메뉴 드롭다운 토글 */}
			{isMenuVisible ? (
				<FloatMenu>
					<Dropdown header width='300px' />
				</FloatMenu>
			) : null}

			{/* 하단: 고정 버튼 */}
			<Button type='float' style={{ bottom: '88px', right: '24px' }}>
				<Icons.Add />
			</Button>
			<Button
				type='float'
				style={{ bottom: '24px', right: '24px' }}
				_onClick={scrollToTop}
			>
				<Icons.ArrowUp />
			</Button>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	z-index: 999;
	padding: 16px;
	background-color: #fff;
	border: none;
	box-shadow: 0;
	transition: box-shadow 0.5s;
	&.scrolled {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
	}
`;

const FloatMenu = styled.div`
	position: absolute;
	top: 60px;
	right: 4px;
`;

export default Header;
