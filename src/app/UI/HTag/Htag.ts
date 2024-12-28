'use client'
import { styled } from 'styled-components'
import { HTagProps } from './Htag.props'
import React from 'react'

export const Htag = styled.h1<HTagProps>`
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
				return 'var(--secondGreen)'
			default:
				return 'var(--white)'
		}
	}};
`

export const HtagComponent: React.FC<HTagProps> = ({
	$tag = 'h1',
	children,
	...props
}) => {
	return React.createElement(
		Htag,
		{
			as: $tag,
			...props,
		},
		children
	)
}
