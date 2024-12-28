'use client'
import React from 'react'
import { HtagComponent } from '../../UI/HTag/Htag'
import { PTagComponent } from '../../UI/PTag/Ptag'

function SectionHeader({
	mode,
	maxWidth,
}: {
	mode:
		| 'ProductSection'
		| 'FeaturesSection'
		| 'AskedQuestionsSection'
		| 'FinancialJourney'
		| 'UseCasesSection'
		| 'TestimonialSection'
	maxWidth?: string
}) {
	return (
		<div
			className={`${
				maxWidth ||
				(mode === 'ProductSection'
					? 'max-w-[910px]'
					: mode === 'FinancialJourney'
					? 'max-w-[910px]'
					: mode === 'FeaturesSection'
					? 'max-w-[1296px]'
					: mode === 'AskedQuestionsSection'
					? 'max-w-[1296px]'
					: mode === 'UseCasesSection'
					? 'max-w-[1296px]'
					: mode === 'TestimonialSection'
					? 'max-w-[910px]'
					: '')
			}`}
		>
			<div className='flex'>
				<HtagComponent
					className='space-x-4'
					$tag='h1'
					$fontFamily='Lexend'
					$color='white'
					$fontSize='48px'
					$lineHeight='72px'
					$fontWeight={500}
				>
					{mode === 'ProductSection' ? 'Our' : ''}
					{mode === 'FeaturesSection' ? 'Our' : ''}
					{mode === 'AskedQuestionsSection' ? 'Our' : ''}
					{mode === 'FinancialJourney'
						? 'Start your financial journey with'
						: ''}
					{mode === 'UseCasesSection' ? '' : ''}
					{mode === 'TestimonialSection' ? 'Our' : ''}
				</HtagComponent>
				<HtagComponent
					$tag='h1'
					$fontFamily='Lexend'
					$color='green'
					$fontSize='48px'
					$lineHeight='72px'
					$fontWeight={500}
				>
					{mode === 'ProductSection' ? 'Products' : ''}
					{mode === 'FeaturesSection' ? 'Features' : ''}
					{mode === 'AskedQuestionsSection' ? 'Questions' : ''}
					{mode === 'FinancialJourney' ? 'YourBank today!' : ''}

					{mode === 'UseCasesSection' ? 'Use Cases' : ''}
					{mode === 'TestimonialSection' ? 'Testimonials' : ''}
				</HtagComponent>
			</div>
			<PTagComponent
				$tag='p'
				$fontFamily='Lexend'
				$color='grey'
				$fontSize='18px'
				$lineHeight='27px'
				$fontWeight={300}
			>
				{mode === 'ProductSection'
					? 'Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations'
					: mode === 'FeaturesSection'
					? 'Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience'
					: mode === 'AskedQuestionsSection'
					? 'Still you have any questions? Contact our Team via support@yourbank.com'
					: mode === 'FinancialJourney'
					? 'Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service'
					: mode === 'UseCasesSection'
					? 'At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions'
					: mode === 'TestimonialSection'
					? 'Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey'
					: ''}
			</PTagComponent>
		</div>
	)
}

export default SectionHeader
