'use client'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import AskedQuestionsCard from './AskedQuestionsCard'

export default function AskedQuestionsSection() {
	return (
		<section className='flex flex-col container mx-auto px-4 gap-[80px] '>
			<SectionHeader mode='AskedQuestionsSection' />
			<div className='flex flex-col justify-center'>
				<AskedQuestionsCard />
			</div>
		</section>
	)
}
