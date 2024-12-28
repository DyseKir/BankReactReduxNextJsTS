'use client'
import React, { useCallback, useReducer, useMemo } from 'react'
import LogoIcon from './LogoIcon'
import Logo from './Logo'
import { ButtonComponent } from '../Button/Button'
import Link from 'next/link'
type ButtonState = {
	selectedMode: 'Home' | 'Careers' | 'About' | 'Security'
}

type ButtonAction = {
	type: 'SELECT_MODE'
	payload: 'Home' | 'Careers' | 'About' | 'Security'
}

function buttonReducer(state: ButtonState, action: ButtonAction): ButtonState {
	switch (action.type) {
		case 'SELECT_MODE':
			if (state.selectedMode !== action.payload) {
				return { selectedMode: action.payload }
			}
			return state
		default:
			return state
	}
}

function HeaderNav() {
	const [state, dispatch] = useReducer(buttonReducer, {
		selectedMode: 'Home',
	})

	const handleHomeClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'Home' })
	}, [])

	const handleCareersClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'Careers' })
	}, [])

	const handleAboutClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'About' })
	}, [])

	const handleSecurityClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'Security' })
	}, [])

	const getButtonStyles = useMemo(
		() => ({
			Home: {
				background: state.selectedMode === 'Home' ? 'bg-[var(--darkGrey)]' : '',
				rounded: state.selectedMode === 'Home' ? 'rounded-[82px]' : 'white',
			},
			Careers: {
				background:
					state.selectedMode === 'Careers' ? 'bg-[var(--darkGrey)]' : '',
				rounded: state.selectedMode === 'Careers' ? 'rounded-[82px]' : 'white',
			},
			About: {
				background:
					state.selectedMode === 'About' ? 'bg-[var(--darkGrey)]' : '',
				rounded: state.selectedMode === 'About' ? 'rounded-[82px]' : 'white',
			},
			Security: {
				background:
					state.selectedMode === 'Security' ? 'bg-[var(--darkGrey)]' : '',
				rounded: state.selectedMode === 'Security' ? 'rounded-[82px]' : 'white',
			},
		}),
		[state.selectedMode]
	)

	return (
		<nav className='flex justify-between items-center px-[34px] py-[20px] bg-[var(--lightBlack)] rounded-[100px] my-[50px] mx-[0px]'>
			<a href='' className='flex items-center'>
				<LogoIcon />
				<Logo />
			</a>

			<ul className='flex'>
				<li>
					<a
						href=''
						onClick={handleHomeClick}
						className={`text-[var(--white)] px-[24px] py-[12px] hover:bg-[var(--darkGrey)] rounded-[82px] ${getButtonStyles.Home.background} ${getButtonStyles.Home.rounded} transition-all duration-300 ease-in-out`}
					>
						Home
					</a>
				</li>

				<li>
					<a
						href=''
						onClick={handleCareersClick}
						className={`text-[var(--white)] px-[24px] py-[12px] hover:bg-[var(--darkGrey)] rounded-[82px] ${getButtonStyles.Careers.background} ${getButtonStyles.Careers.rounded} transition-all duration-300 ease-in-out`}
					>
						Careers
					</a>
				</li>

				<li>
					<a
						href=''
						onClick={handleAboutClick}
						className={`text-[var(--white)] px-[24px] py-[12px] hover:bg-[var(--darkGrey)] rounded-[82px] ${getButtonStyles.About.background} ${getButtonStyles.About.rounded} transition-all duration-300 ease-in-out`}
					>
						About
					</a>
				</li>

				<li>
					<a
						href=''
						onClick={handleSecurityClick}
						className={`text-[var(--white)] px-[24px] py-[12px] hover:bg-[var(--darkGrey)] rounded-[82px] ${getButtonStyles.Security.background} ${getButtonStyles.Security.rounded} transition-all duration-300 ease-in-out`}
					>
						Security
					</a>
				</li>
			</ul>

			<div className='flex space-x-4'>
				<Link href='/signup'>
					<ButtonComponent
						$background='GhostButton'
						$color='white'
						$borderradius='82px'
						$padding='14px 26px'
					>
						Sign Up
					</ButtonComponent>
				</Link>
				<Link href='../../Pages/LogInPage.tsx'>
					<ButtonComponent
						$background='GreenButton'
						$color='black'
						$borderradius='82px'
						$padding='14px 30px'
					>
						Login
					</ButtonComponent>
				</Link>
			</div>
		</nav>
	)
}

export default HeaderNav
