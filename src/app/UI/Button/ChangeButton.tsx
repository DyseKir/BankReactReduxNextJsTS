'use client'
import React, { useReducer, useCallback, useMemo } from 'react'
import { ButtonComponent } from './Button'
import { ButtonProps } from './Button.props'

type ButtonState = {
	selectedMode: 'individual' | 'business'
}

type ButtonAction = {
	type: 'SELECT_MODE'
	payload: 'individual' | 'business'
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

function ChangeButton({
	mode,
	onModeChange,
}: {
	mode: 'individual' | 'business'
	onModeChange?: (mode: 'individual' | 'business') => void
}) {
	const [state, dispatch] = useReducer(buttonReducer, {
		selectedMode: mode,
	})

	const handleIndividualClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'individual' })
		onModeChange?.('individual')
	}, [onModeChange])

	const handleBusinessClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'business' })
		onModeChange?.('business')
	}, [onModeChange])

	const individualButtonProps: Pick<ButtonProps, '$background' | '$color'> =
		useMemo(
			() => ({
				$background:
					state.selectedMode === 'individual' ? 'GreenButton' : 'GhostButton',
				$color: state.selectedMode === 'individual' ? 'black' : 'white',
			}),
			[state.selectedMode]
		)

	const businessButtonProps: Pick<ButtonProps, '$background' | '$color'> =
		useMemo(
			() => ({
				$background:
					state.selectedMode === 'business' ? 'GreenButton' : 'GhostButton',
				$color: state.selectedMode === 'business' ? 'black' : 'white',
			}),
			[state.selectedMode]
		)

	return (
		<div className='rounded-[82px] bg-[var(--lightBlack)] inline-flex  p-[14px] max-h-[82px] border border-[#262626] '>
			<ButtonComponent
				{...individualButtonProps}
				$borderradius='140px'
				$padding='14px 24px'
				onClick={handleIndividualClick}
				$stretch='none'
			>
				For Individuals
			</ButtonComponent>
			<ButtonComponent
				{...businessButtonProps}
				$borderradius='140px'
				$padding='14px 24px'
				onClick={handleBusinessClick}
			>
				For Businesses
			</ButtonComponent>
		</div>
	)
}

export default React.memo(ChangeButton)
