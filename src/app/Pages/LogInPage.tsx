import React from 'react'
import OurTestimonialSection from '../Sections/OurTestimonialSection/OurTestimonialSection'
import { HtagComponent } from '../UI/HTag/Htag'
import { PTagComponent } from '../UI/PTag/Ptag'
import LoginInputForm from '../UI/Input/LoginInputForm'

function LoginPage() {
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
						Login
					</HtagComponent>
					<PTagComponent
						$tag='p'
						$color='grey'
						$fontSize='18px'
						$lineHeight='normal'
						$fontWeight={300}
						$fontFamily='Lexend'
					>
						Welcome back! Please log in to access your account.
					</PTagComponent>
				</div>
				<LoginInputForm />
			</div>
			<OurTestimonialSection />
		</div>
	)
}

export default LoginPage
