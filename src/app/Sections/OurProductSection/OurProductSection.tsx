import React, { useState } from 'react'
import SectionHeader from '@/app/Sections/SectionHeader/SectionHeader'
import ProductList from './ProductList'
import ChangeButton from '@/app/UI/Button/ChangeButton'

function OurProductSection() {
	const [mode, setMode] = useState<'individual' | 'business'>('individual')

	const handleModeChange = (newMode: 'individual' | 'business') => {
		setMode(newMode)
	}

	return (
		<section className='flex flex-col items-center gap-[100px] my-[150px]'>
			<div className='flex items-end justify-between w-full'>
				<SectionHeader mode='ProductSection' />
				<ChangeButton mode={mode} onModeChange={handleModeChange} />
			</div>
			<ProductList mode={mode} />
		</section>
	)
}

export default OurProductSection
