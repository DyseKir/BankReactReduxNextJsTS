import React from 'react'
import LogoIcon from '../Header/LogoIcon'
import Logo from '../Header/Logo'
import PhoneIcon from './PhoneIcon'
import MailIcon from './MailIcon'
import LocationIcon from './LocationIcon'
import InstaIcon from '../icons/InstaIcon'
import FaceBookIcon from '../icons/FaceBookIcon'
import TwitterIcon from '../icons/TwitterIcon'
import { PTagComponent } from '../PTag/Ptag'

function Footer() {
	return (
		<div className='container mt-[100px] mb-[50px]  mx-auto gap-'>
			<div className='flex flex-col items-center justify-center gap-[50px]'>
				<div className='flex items-center'>
					<LogoIcon />
					<Logo />
				</div>

				<nav>
					<ul className='flex gap-5'>
						<li>
							<a href='' className='text-[18px] font-normal leading-7'>
								Home
							</a>
						</li>
						<li>
							<a href='' className='text-[18px] font-normal leading-7'>
								Careers
							</a>
						</li>
						<li>
							<a href='' className='text-[18px] font-normal leading-7'>
								About
							</a>
						</li>
						<li>
							<a href='' className='text-[18px] font-normal leading-7'>
								Security
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className='h-[2px] w-full bg-[var(--darkGrey)] my-[50px]'></div>

			<div className='flex flex-row gap-5 items-center justify-center'>
				<div className='flex gap-[6px] items-center'>
					<MailIcon />
					<a href='mailto:midoriya20052003@gmail.com'>
						midoriya20052003@gmail.com
					</a>
				</div>
				<div className='flex gap-[6px] items-center'>
					<PhoneIcon />
					<a href='tel:+91 91813 23 2309'>+91 91813 23 2309</a>
				</div>
				<div className='flex gap-[6px] items-center'>
					<LocationIcon />
					<a href='https://maps.google.com/?q=55.755826,37.617299'>
						Somewhere in the World
					</a>
				</div>
			</div>

			<div className='h-[2px] w-full bg-[var(--darkGrey)] my-[50px]'></div>

			<div className='flex flex-row justify-between items-center bg-[var(--mediumGreyActive)] border border-[var(--darkGrey)] rounded-[100px] py-[16px] px-[30px] '>
				<div className='flex gap-[14px]'>
					<a href=''>
						<InstaIcon />
					</a>

					<a href=''>
						{' '}
						<FaceBookIcon />
					</a>

					<a href=''>
						{' '}
						<TwitterIcon />
					</a>
				</div>
				<PTagComponent
					$tag='p'
					$fontFamily='Lexend'
					$fontSize='18px'
					$color='grey'
					$lineHeight='27px'
					$fontWeight={300}
				>
					YourBank All Rights Reserved
				</PTagComponent>
				<div className='flex flex-row'>
					<PTagComponent
						$tag='p'
						$fontFamily='Lexend'
						$fontSize='18px'
						$color='grey'
						$lineHeight='27px'
						$fontWeight={300}
					>
						Privacy Policy
					</PTagComponent>
					<div className='w-[2px] h-max-full bg-[var(--lightGrey)] mx-3'></div>
					<PTagComponent
						$tag='p'
						$fontFamily='Lexend'
						$fontSize='18px'
						$color='grey'
						$lineHeight='27px'
						$fontWeight={300}
					>
						Terms of Service
					</PTagComponent>
				</div>
			</div>
		</div>
	)
}

export default Footer
