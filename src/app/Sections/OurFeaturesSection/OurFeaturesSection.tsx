import React, { useState, useCallback, useMemo } from 'react'
import FeaturseButtons from '@/app/UI/Button/FeaturseButtons'
import SectionHeader from '@/app/Sections/SectionHeader/SectionHeader'
import FeaturesCardList from './FeaturesCard'

type Mode = 'onlineBanking' | 'financialTools' | 'customerSupport'

function OurFeaturesSection() {
	const [selectedMode, setSelectedMode] = useState<Mode>('onlineBanking')

	const handleModeChange = useCallback((mode: string) => {
		const modeMap: Record<string, Mode> = {
			'Online Banking': 'onlineBanking',
			'Financial Tools': 'financialTools',
			'Customer Support': 'customerSupport',
		}

		const newMode = modeMap[mode]
		if (newMode) {
			setSelectedMode(newMode)
		}
	}, [])

	const memoizedFeatureCardList = useMemo(
		() => <FeaturesCardList mode={selectedMode} />,
		[selectedMode]
	)

	return (
		<section className='flex flex-col gap-[80px] my-[150px]'>
			<SectionHeader mode='FeaturesSection' />
			<div className='flex gap-[30px]'>
				<FeaturseButtons onModeChange={handleModeChange} />
				{memoizedFeatureCardList}
			</div>
		</section>
	)
}

export default OurFeaturesSection
