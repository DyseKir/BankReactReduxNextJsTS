import { styled } from 'styled-components'
import { HeroCardProps } from './HeroCardProps'

const HeroCardWrapper = styled.div<HeroCardProps>`
	width: ${({ width }) => width};
	background-color: var(--mediumGreyActive);
	border: 1px solid var(--darkGrey);
	border-radius: 10px;
	display: flex;
	padding: 14px 20px;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	${({ positionparams }) =>
		positionparams && `top: ${positionparams.split(': ')[1]};`}
	opacity: ${({ opacity }) => opacity};
	z-index: ${({ zindex }) => zindex};
`

export default HeroCardWrapper
