'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HtagComponent } from '@/app/UI/HTag/Htag'
import { PTagComponent } from '@/app/UI/PTag/Ptag'

type Question = {
	question: string
	answer: string
}
export default function AskedQuestionsCard() {
	const [questions, setQuestions] = useState<Question>([])

	useEffect(() => {
		axios
			.get('/QuestionsCard.json')
			.then(res => {
				setQuestions(
					Array.isArray(res.data.questions) ? res.data.questions : []
				)
			})
			.catch(err => {
				console.error(err)
				setQuestions([])
			})
	}, [])

	return (
		<div className='flex flex-wrap gap-[30px]'>
			{questions.length > 0 ? (
				questions.map((item, index) => (
					<article
						key={index}
						className='relative flex flex-col p-[50px] border border-[var(--darkGrey)] rounded-[14px] max-w-[730px]'
					>
						<HtagComponent
							className="after:content-[''] after:block after:h-px after:w-full after:bg-[var(--darkGrey)] after:my-4"
							$tag='h3'
							$fontFamily='Lexend'
							$color='white'
							$fontSize='20px'
							$lineHeight='normal'
							$fontWeight={500}
						>
							{item.question}
						</HtagComponent>
						<PTagComponent
							$tag='p'
							$fontFamily='Lexend'
							$color='white'
							$fontSize='18px'
							$lineHeight='27px'
							$fontWeight={400}
						>
							{item.answer}
						</PTagComponent>
					</article>
				))
			) : (
				<p className='text-white'>No questions available.</p>
			)}
		</div>
	)
}
