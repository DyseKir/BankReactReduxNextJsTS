'use client'
import { ButtonComponent } from '@/app/UI/Button/Button'
import { HtagComponent } from '@/app/UI/HTag/Htag'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import React from 'react'

function FinancialJourney() {
	return (
		<section className='flex my-[150px] p-[80px] justify-between items-center border border-[var(--darkGrey)] rounded-[20px]'>
			<div className='flex flex-col max-w-[1076px] gap-y-[14px]'>
				<div className='flex flex-row flex-wrap gap-2'>
					<HtagComponent
						$tag='h3'
						$fontFamily='Lexend'
						$color='white'
						$fontSize='40px'
						$lineHeight='60px'
						$fontWeight={400}
					>
						Start your financial journey with
					</HtagComponent>
					<HtagComponent
						$tag='h3'
						$fontFamily='Lexend'
						$color='green'
						$fontSize='40px'
						$lineHeight='60px'
						$fontWeight={400}
					>
						YourBank today!
					</HtagComponent>
				</div>
				<PTagComponent
					$tag='p'
					$fontFamily='Inter'
					$color='grey'
					$fontSize='18px'
					$lineHeight='27px'
					$fontWeight={300}
				>
					Ready to take control of your finances? Join YourBank now, and let us
					help you achieve your financial goals with our tailored solutions and
					exceptional customer service
				</PTagComponent>
			</div>

			<div>
				<ButtonComponent
					$background='GreenButton'
					$color='black'
					$fontSize='18px'
					$lineHeight='27px'
					$fontWeight='400'
					$borderradius='82px'
					$padding='18px 30px'
				>
					Open Account
				</ButtonComponent>
			</div>
		</section>
	)
}

export default FinancialJourney
