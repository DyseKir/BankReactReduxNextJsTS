'use client'
import styled from 'styled-components'
import { ButtonProps } from './Button.props'

export const ButtonComponent = styled.button<ButtonProps>`
	display: inline-flex;
	justify-content: center;
	cursor: pointer;
	border: none;
	transition: all 0.6s ease-in-out;

$fontSize: ${props => {
	switch (props.$fontSize) {
		case '12px':
			return '12px'
		case '14px':
			return '14px'
		case '16px':
			return '16px'
		case '18px':
			return '18px'
		case '20px':
			return '20px'
		default:
			return 'inherit'
	}
}}

line-height: ${props => {
	switch (props.$lineHeight) {
		case '27px':
			return '27px'
		case '32px':
			return '32px'
		case '36px':
			return '36px'
		case '60px':
			return '60px'
		case '72px':
			return '72px'
		case 'normal':
			return 'normal'
		default:
			return '32px'
	}
}};

	background-color: ${props => {
		switch (props.$background) {
			case 'GreenButton':
				return 'var(--primaryGreen)'
			case 'InputButton':
				return 'var(--darkGrey)'
			case 'GhostButton':
				return 'transparent'
			case 'ExchangeButton':
				return 'var(--secondGreen)'
			case 'FeaturesButton':
				return 'var(--lightBlack)'
			case 'FeaturesButtonActive':
				return 'var(--mediumGreyActive)'
			default:
				return 'transparent'
		}
	}};

	color: ${props => {
		switch (props.$color) {
			case 'white':
				return 'var(--white)'
			case 'black':
				return 'var(--lightBlack)'
			case 'green':
				return 'var(--primaryGreen)'
			default:
				return 'inherit'
		}
	}};

	border-radius: ${props => {
		switch (props.$borderradius) {
			case '62px':
				return '62px'
			case '70px':
				return '70px'
			case '82px':
				return '82px'
			case '100px':
				return '100px'
			case '140px':
				return '140px'
			default:
				return '0'
		}
	}};

	font-weight: ${props => {
		switch (props.$fontWeight) {
			case '100':
				return '100'
			case '200':
				return '200'
			case '300':
				return '300'
			case '400':
				return '400'
			case '500':
				return '500'
			case '600':
				return '600'
			case '700':
				return '700'
			case '800':
				return '800'
			case '900':
				return '900'
			default:
				return '300'
		}
	}};
	padding: ${props => {
		switch (props.$padding) {
			case '14px 24px':
				return '14px 24px'
			case '14px 26px':
				return '14px 26px'
			case '14px 30px':
				return '14px 30px'
			case '18px 20px':
				return '18px 20px'
			case '18px 30px':
				return '18px 30px'
			default:
				return '10px 20px'
		}
	}};

	align-items: ${props => {
		switch (props.$stretch) {
			case 'stretch':
				return 'stretch'
			case 'start':
				return 'flex-start'
			case 'center':
				return 'center'
			case 'end':
				return 'flex-end'
			default:
				return 'center'
		}
	}};

	border: ${props => (props.$border ? props.$border : 'none')};

	stretch: ${props => (props.$stretch === 'stretch' ? '100%' : 'none')};
`
