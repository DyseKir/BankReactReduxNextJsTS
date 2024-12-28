import React from 'react'
import styled from 'styled-components'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import { CardProps, cardDataMap } from './Card.props'

const StyledCard = styled.div<{ $mode?: 'TopCard' | 'BottomCard' }>`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
	padding: 30px;
	border: 1px solid var(--darkGrey);
	border-radius: 16px;
	min-width: 314px;

	min-height: ${props =>
		props.$mode === 'TopCard'
			? '222px'
			: props.$mode === 'BottomCard'
			? '192px'
			: ''};
`

const Card: React.FC<CardProps> = ({ type, mode = 'TopCard' }) => {
	const cardData = cardDataMap[type]
	const icon =
		typeof cardData.icon === 'object' ? cardData.icon[mode] : cardData.icon

	return (
		<StyledCard $mode={mode}>
			<img src={icon} alt={cardData.fullText} />
			<PTagComponent
				$tag='p'
				$fontFamily='Inter'
				$color='white'
				$fontSize='16px'
				$lineHeight='32px'
				$fontWeight={400}
			>
				{cardData.text}
			</PTagComponent>
		</StyledCard>
	)
}

export default Card
