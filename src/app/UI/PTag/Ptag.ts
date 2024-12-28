import { styled } from 'styled-components'
import { PTagProps } from './Ptag.props'
import React from 'react'

export const Ptag = styled.p<PTagProps>`
	font-family: ${({ $fontFamily }) =>
		$fontFamily === 'Lexend' ? 'Lexend, sans-serif' : 'Inter, sans-serif'};
	font-weight: ${({ $fontWeight }) => $fontWeight || 300};
	font-size: ${({ $fontSize }) => $fontSize || '16px'};
	line-height: ${({ $lineHeight }) => $lineHeight || '32px'};
	color: ${({ $color }) => {
		switch ($color) {
			case 'white':
				return 'var(--white)'
			case 'black':
				return 'var(--lightBlack)'
			case 'green':
				return 'var(--primaryGreen)'
			case 'grey':
				return 'var(--lightGrey)'
			default:
				return 'var(--white)'
		}
	}};
`

export const PTagComponent: React.FC<PTagProps> = ({
	$tag = 'p',
	children,
	...props
}) => {
	return React.createElement(
		Ptag,
		{
			as: $tag,
			...props,
		},
		children
	)
}
