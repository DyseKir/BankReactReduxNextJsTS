import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ChangeButton from '@/app/UI/Button/ChangeButton'
import TestimonialCardList from './TestimonialCard'

function OurTestimonialSection() {
	const [mode, setMode] = useState<'individual' | 'business'>('individual')

	const handleModeChange = (newMode: 'individual' | 'business') => {
		setMode(newMode)
	}

	return (
		<section className='my-[150px] flex flex-col gap-[100px]'>
			<div className='flex items-end justify-between w-full gap-[80px]'>
				<SectionHeader mode='TestimonialSection' />
				<ChangeButton mode={mode} onModeChange={handleModeChange} />
			</div>

			<TestimonialCardList mode={mode} />
		</section>
	)
}

export default OurTestimonialSection
