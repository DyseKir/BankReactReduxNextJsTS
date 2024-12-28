import React, { useCallback, useMemo, useReducer } from 'react'
import { ButtonComponent } from './Button'
import { ButtonProps } from './Button.props'

type ButtonState = {
	selectedMode: 'Online Banking' | 'Financial Tools' | 'Customer Support'
}

type ButtonAction = {
	type: 'SELECT_MODE'
	payload: 'Online Banking' | 'Financial Tools' | 'Customer Support'
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

function FeatureButtons({
	onModeChange,
}: {
	onModeChange: (mode: string) => void
}) {
	const [state, dispatch] = useReducer(buttonReducer, {
		selectedMode: 'Online Banking',
	})

	const handleOnlineBankingClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'Online Banking' })
		onModeChange('Online Banking')
	}, [onModeChange])

	const handleFinancialToolsClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'Financial Tools' })
		onModeChange('Financial Tools')
	}, [onModeChange])

	const handleCustomerSupportClick = useCallback(() => {
		dispatch({ type: 'SELECT_MODE', payload: 'Customer Support' })
		onModeChange('Customer Support')
	}, [onModeChange])
	const OnlineBankingProps: Pick<ButtonProps, '$background' | '$color'> =
		useMemo(
			() => ({
				$background:
					state.selectedMode === 'Online Banking'
						? 'FeaturesButtonActive'
						: 'FeaturesButton',
				$color: state.selectedMode === 'Online Banking' ? 'green' : 'white',
			}),
			[state.selectedMode]
		)

	const FinancialToolsProps: Pick<ButtonProps, '$background' | '$color'> =
		useMemo(
			() => ({
				$background:
					state.selectedMode === 'Financial Tools'
						? 'FeaturesButtonActive'
						: 'FeaturesButton',
				$color: state.selectedMode === 'Financial Tools' ? 'green' : 'white',
			}),
			[state.selectedMode]
		)

	const CustomerSupportProps: Pick<ButtonProps, '$background' | '$color'> =
		useMemo(
			() => ({
				$background:
					state.selectedMode === 'Customer Support'
						? 'FeaturesButtonActive'
						: 'FeaturesButton',
				$color: state.selectedMode === 'Customer Support' ? 'green' : 'white',
			}),
			[state.selectedMode]
		)

	return (
		<div className='flex flex-col w-100% max-h-[336px] p-12  gap-[26px] bg-[var(--lightBlack)] rounded-[12px] whitespace-nowrap'>
			<ButtonComponent
				className='font-normal text-[18px] leading-[27px] '
				{...OnlineBankingProps}
				$borderradius='82px'
				$padding='18px 24px'
				$border='1px solid var(--darkGrey)'
				$stretch='start'
				onClick={handleOnlineBankingClick}
			>
				Online Banking
			</ButtonComponent>
			<ButtonComponent
				className='font-normal text-[18px] leading-[27px] '
				{...FinancialToolsProps}
				$borderradius='82px'
				$padding='18px 24px'
				$border='1px solid var(--darkGrey)'
				$stretch='start'
				onClick={handleFinancialToolsClick}
			>
				Financial Tools
			</ButtonComponent>
			<ButtonComponent
				className='font-normal text-[18px] leading-[27px] '
				{...CustomerSupportProps}
				$borderradius='82px'
				$padding='18px 24px'
				$border='1px solid var(--darkGrey)'
				$stretch='start'
				onClick={handleCustomerSupportClick}
			>
				Customer Support
			</ButtonComponent>
		</div>
	)
}

export default FeatureButtons
