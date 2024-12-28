import React, { useEffect, useState } from 'react'
import ComasIcon from './ComasIcon'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import ArrowRightIcon from './ArrowRightIcon'
import ArrowLeftIcon from './ArrowLeftIcon'

type Testimonial = {
	text: string
	author: string
}

const TestimonialCard: React.FC<{
	testimonial: Testimonial
	index: number
}> = ({ testimonial, index }) => {
	return (
		<motion.article
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
			}}
			className='flex flex-col gap-[50px] w-[404px] min-w-[404px] items-center text-center'
		>
			<div className='flex items-center gap-4 w-full'>
				<div className='flex-grow h-[1px] bg-[var(--darkGrey)]'></div>
				<ComasIcon />
				<div className='flex-grow h-[1px] bg-[var(--darkGrey)]'></div>
			</div>

			<PTagComponent
				$tag='p'
				$fontFamily='Lexend'
				$color='white'
				$fontSize='18px'
				$lineHeight='27px'
				$fontWeight={400}
			>
				{testimonial.text}
			</PTagComponent>

			<PTagComponent
				$fontFamily='Lexend'
				$color='green'
				$fontSize='18px'
				$lineHeight='27px'
				$fontWeight={500}
			>
				{testimonial.author}
			</PTagComponent>
		</motion.article>
	)
}

const TestimonialCardList: React.FC<{ mode: 'individual' | 'business' }> = ({
	mode,
}) => {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([])
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		axios
			.get('/TestimonialCard.json')
			.then(response => {
				if (response.data?.testimonials?.[mode]) {
					setTestimonials(response.data.testimonials[mode])
					setCurrentIndex(0)
				} else {
					console.warn('No testimonials found for mode:', mode)
					setTestimonials([])
				}
			})
			.catch(error => {
				console.error('Error loading testimonials:', error)
				setTestimonials([])
			})
	}, [mode])

	const handleNext = () => {
		setCurrentIndex(prev => {
			const nextIndex = prev + 1
			return nextIndex >= testimonials.length - 2 ? 0 : nextIndex
		})
	}

	const handlePrev = () => {
		setCurrentIndex(prev => {
			const prevIndex = prev - 1
			return prevIndex < 0 ? testimonials.length - 3 : prevIndex
		})
	}

	return (
		<div className='relative flex flex-col items-center'>
			<div className='flex flex-row items-center gap-6'>
				<motion.button
					className='cursor-pointer'
					whileTap={{ scale: 0.9 }}
					onClick={handlePrev}
				>
					<ArrowLeftIcon />
				</motion.button>

				<div className='overflow-hidden w-[1372px]'>
					{' '}
					<motion.div
						className='flex flex-row items-start gap-[80px]'
						initial={{ x: 0 }}
						animate={{ x: -currentIndex * (404 + 80) }}
						transition={{ type: 'tween', duration: 0.5 }}
					>
						<AnimatePresence mode='wait'>
							{testimonials.map((testimonial, index) => (
								<TestimonialCard
									key={`${mode}-${index}`}
									testimonial={testimonial}
									index={index}
								/>
							))}
						</AnimatePresence>
					</motion.div>
				</div>

				<motion.button
					className='cursor-pointer'
					whileTap={{ scale: 0.9 }}
					onClick={handleNext}
				>
					<ArrowRightIcon />
				</motion.button>
			</div>
		</div>
	)
}

export default TestimonialCardList
