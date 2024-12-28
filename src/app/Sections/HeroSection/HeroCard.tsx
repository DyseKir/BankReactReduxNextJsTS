import React from 'react'

import ExchangeIcon from '@/app/UI/icons/ExchangeIcon'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import { HeroCardProps } from './HeroCardProps'
import HeroCardWrapper from './HeroCardWrapper'

function HeroCard({ width, positionparams, opacity, zindex }: HeroCardProps) {
	return (
		<HeroCardWrapper
			width={width}
			positionparams={positionparams}
			opacity={opacity}
			zindex={zindex}
		>
			<div className='flex items-center gap-[8px]'>
				<ExchangeIcon />
				<div>
					<PTagComponent
						$tag='p'
						$fontFamily='Lexend'
						$color='white'
						$fontSize='16px'
						$lineHeight='24px'
						$fontWeight={300}
					>
						Transaction
					</PTagComponent>
					<PTagComponent
						$tag='p'
						$fontFamily='Lexend'
						$color='white'
						$fontSize='18px'
						$lineHeight='27px'
						$fontWeight={400}
					>
						Joel Kenley
					</PTagComponent>
				</div>
			</div>
			<PTagComponent
				$tag='p'
				$fontFamily='Lexend'
				$color='white'
				$fontSize='20px'
				$lineHeight='32px'
				$fontWeight={500}
			>
				-$68.00
			</PTagComponent>
		</HeroCardWrapper>
	)
}

export default HeroCard
