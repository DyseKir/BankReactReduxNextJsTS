/* eslint-disable react/no-children-prop */
import { ButtonComponent } from '@/app/UI/Button/Button'
import { HtagComponent } from '@/app/UI/HTag/Htag'
import RequiredIcon from '@/app/UI/icons/RequiredIcon'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import React from 'react'
import HeroCard from './HeroCard'

function HeroSection() {
	return (
		<section className='flex flex-row gap-[120px]'>
			<div className='flex flex-col max-w-[826px]'>
				<div className='flex flex-col gap-[20px] '>
					<div className='flex w-max gap-[6px] bg-[var(--darkGrey)] rounded-[60px] px-[20px] py-[10px]'>
						<RequiredIcon />
						<PTagComponent
							$tag='p'
							$fontFamily='Lexend'
							$color='white'
							$fontSize='18px'
							$lineHeight='24px'
							$fontWeight={300}
						>
							No LLC Required, No Credit Check.
						</PTagComponent>
					</div>

					<div className='flex flex-col gap-[50px]'>
						<div>
							<HtagComponent
								$tag='h1'
								$fontFamily='Lexend'
								$color='white'
								$fontSize='48px'
								$lineHeight='72px'
								$fontWeight={500}
								className='whitespace-normal'
							>
								Welcome to YourBank Empowering Your
								<span className='text-[var(--primaryGreen)]'> Financial</span>
							</HtagComponent>
							<HtagComponent
								$tag='h1'
								$fontFamily='Lexend'
								$color='green'
								$fontSize='48px'
								$lineHeight='72px'
								$fontWeight={500}
							>
								Journey
							</HtagComponent>
							<PTagComponent
								$tag='p'
								$fontFamily='Lexend'
								$color='grey'
								$fontSize='18px'
								$lineHeight='27px'
								$fontWeight={300}
							>
								{`At YourBank, our mission is to provide comprehensive banking solutions
				that empower individuals and businesses to achieve their financial
				goals. We are committed to delivering personalized and innovative
				services that prioritize our customers' needs.`}
							</PTagComponent>
						</div>

						<ButtonComponent
							className='w-max'
							$background='GreenButton'
							$color='black'
							$fontSize='18px'
							$lineHeight='27px'
							$fontWeight={'400'}
							$borderradius='82px'
							$padding='18px 30px'
						>
							Open Account
						</ButtonComponent>
					</div>
				</div>
			</div>

			<div className='flex flex-col bg-[var(--mediumGreyActive)] border border-[var(--darkGrey)] rounded-[10px] w-[516px] h-[624px] p-[34px] justify-between'>
				<div>
					<PTagComponent
						$tag='p'
						$fontFamily='Lexend'
						$color='white'
						$fontSize='18px'
						$lineHeight='27px'
						$fontWeight={400}
					>
						Your Transactions
					</PTagComponent>
					<div className='flex flex-col items-center relative'>
						{[
							{
								width: '446px',
								positionparams: 'top: 22px',
								opacity: '1',
								zindex: '3',
							},
							{
								width: '410px',
								positionparams: 'top: 74px',
								opacity: '0.5',
								zindex: '2',
							},
							{
								width: '376px',
								positionparams: 'top: 126px',
								opacity: '0.2',
								zindex: '1',
							},
						].map((cardProps, index) => (
							<HeroCard children={undefined} key={index} {...cardProps} />
						))}
					</div>
				</div>

				<div>
					<PTagComponent
						$tag='p'
						$fontFamily='Lexend'
						$color='white'
						$fontSize='18px'
						$lineHeight='27px'
						$fontWeight={400}
					>
						Money Exchange
					</PTagComponent>
					<div>
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
