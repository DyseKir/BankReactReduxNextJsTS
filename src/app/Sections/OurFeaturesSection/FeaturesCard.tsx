import { HtagComponent } from '@/app/UI/HTag/Htag'
import React, { useEffect, useState, useCallback } from 'react'
import ArrowIcon from './ArrowIcon'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import { motion } from 'framer-motion'

type Card = {
	title: string
	description: string
}

type Mode = 'onlineBanking' | 'financialTools' | 'customerSupport'

const FeaturesCard: React.FC<{ card: Card; index: number }> = ({
	card,
	index,
}) => {
	return (
		<motion.article
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.2,
				ease: 'easeOut',
			}}
			className='flex flex-col space-y-5 bg-[var(--lightBlack)] p-[50px] w-[588px] rounded-[12px]'
		>
			<div className='flex justify-between items-center '>
				<HtagComponent
					$tag='h3'
					$fontFamily='Lexend'
					$color='white'
					$fontSize='22px'
					$lineHeight='32px'
					$fontWeight='400'
				>
					{card.title}
				</HtagComponent>
				<a href='' aria-label={`Learn more about ${card.title}`}>
					<ArrowIcon />
				</a>
			</div>
			<PTagComponent
				$tag='p'
				$fontFamily='Lexend'
				$color='grey'
				$fontSize='18px'
				$lineHeight='27px'
				$fontWeight='300'
			>
				{card.description}
			</PTagComponent>
		</motion.article>
	)
}

const FeaturesCardList: React.FC<{ mode: Mode }> = ({ mode }) => {
	const [cards, setCards] = useState<Card[]>([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchCards = useCallback(async () => {
		try {
			setIsLoading(true)
			const response = await fetch('./FeaturesCard.json')

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()
			const modeData = data[mode]

			setCards(Array.isArray(modeData) ? modeData : [])
		} catch (error) {
			console.error('Error loading:', error)
			setCards([])
		} finally {
			setIsLoading(false)
		}
	}, [mode])

	useEffect(() => {
		fetchCards()
	}, [fetchCards])

	if (isLoading) {
		return (
			<div className='flex justify-center items-center h-full'>
				<HtagComponent
					$tag='h3'
					$fontFamily='Lexend'
					$color='white'
					$fontSize='22px'
					$lineHeight='32px'
					$fontWeight='400'
				>
					Loading...
				</HtagComponent>
			</div>
		)
	}

	if (cards.length === 0) {
		return (
			<div className='flex justify-center items-center h-full'>
				<HtagComponent
					$tag='h3'
					$fontFamily='Lexend'
					$color='white'
					$fontSize='22px'
					$lineHeight='32px'
					$fontWeight='400'
				>
					No cards found
				</HtagComponent>
			</div>
		)
	}

	return (
		<div className='flex flex-wrap gap-[30px] justify-start max-w-[1258px]'>
			{cards.map((card, index) => (
				<FeaturesCard key={`${mode}-${index}`} card={card} index={index} />
			))}
		</div>
	)
}

export default FeaturesCardList
