import React from 'react'
import { HtagComponent } from '../UI/HTag/Htag'
import { PTagComponent } from '../UI/PTag/Ptag'
import OurTestimonialSection from '../Sections/OurTestimonialSection/OurTestimonialSection'
import SignUpInputForm from '../UI/Input/SignUpInputForm'

function SignUpPage() {
	return (
		<div>
			<div className='flex flex-col text-center py-[100px] px-[150px] bg-[var(--lightBlack)] border border-[var(--darkGrey)] rounded-[20px] max-w-[1326px] mx-auto gap-[60px]'>
				<div className='flex flex-col gap-[20px]'>
					<HtagComponent
						$tag='h1'
						$color='green'
						$fontFamily='Lexend'
						$fontSize='48px'
						$fontWeight={500}
						$lineHeight='normal'
					>
						Sign Up
					</HtagComponent>
					<PTagComponent
						$tag='p'
						$color='grey'
						$fontSize='18px'
						$lineHeight='normal'
						$fontWeight={300}
						$fontFamily='Lexend'
					>
						Join our community today! Create an account to unlock exclusive
						features and personalized experiences.
					</PTagComponent>
				</div>
				<SignUpInputForm />
			</div>
			<OurTestimonialSection />
		</div>
	)
}

export default SignUpPage
