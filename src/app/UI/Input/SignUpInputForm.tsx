import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ButtonComponent } from '../Button/Button'
import { PTagComponent } from '../PTag/Ptag'
import FaceBookIcon2 from '../icons/FaceBookIcon2'
import GoogleIcon from '../icons/GoogleIcon'
import AppleIcon from '../icons/AppleIcon'
import { IForm } from './InputProps'

function SignUpInputForm() {
	const { handleSubmit, register, formState } = useForm<IForm>({
		mode: 'onChange',
	})

	const emailError = formState.errors['email']?.message
	const firstNameError = formState.errors['FirstName']?.message
	const lastNameError = formState.errors['LastName']?.message
	const passwordError = formState.errors['password']?.message
	const onSubmit: SubmitHandler<IForm> = data => console.log(data)
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-[40px]'
		>
			<div className='flex flex-wrap gap-[30px] w-full'>
				<input
					className={`bg-[var(--mediumGreyActive)] border rounded-[88px] p-[24px] text-[var(--textColor)] text-[18px] font-light leading-[27px] flex-1 min-w-[calc(50%-15px)] ${
						firstNameError
							? 'border-red-500 placeholder-red-500'
							: 'border-[var(--darkGrey)]'
					}`}
					type='text'
					placeholder={firstNameError || 'Enter First Name'}
					{...register('FirstName', {
						required: 'First Name is required',
						minLength: {
							value: 4,
							message: 'First Name must be at least 4 characters long',
						},
					})}
				/>

				<input
					className={`bg-[var(--mediumGreyActive)] border rounded-[88px] p-[24px] text-[var(--textColor)] text-[18px] font-light leading-[27px] flex-1 min-w-[calc(50%-15px)] ${
						lastNameError
							? 'border-red-500 placeholder-red-500'
							: 'border-[var(--darkGrey)]'
					}`}
					type='text'
					placeholder={lastNameError || 'Enter Last Name'}
					{...register('LastName', {
						required: 'Last Name is required',
						minLength: {
							value: 4,
							message: 'Last Name must be at least 4 characters long',
						},
					})}
				/>

				<input
					className={`bg-[var(--mediumGreyActive)] border rounded-[88px] p-[24px] text-[var(--textColor)] text-[18px] font-light leading-[27px] flex-1 min-w-[calc(50%-15px)] ${
						emailError
							? 'border-red-500 placeholder-red-500'
							: 'border-[var(--darkGrey)]'
					}`}
					type='text'
					placeholder={emailError || 'Enter your email'}
					{...register('email', {
						required: 'Email is required',
						minLength: {
							value: 5,
							message: 'Email must be at least 5 characters long',
						},
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address',
						},
					})}
				/>

				<input
					className={`bg-[var(--mediumGreyActive)] border rounded-[88px] p-[24px] text-[var(--textColor)] text-[18px] font-light leading-[27px] flex-1 min-w-[calc(50%-15px)] ${
						passwordError
							? 'border-red-500 placeholder-red-500'
							: 'border-[var(--darkGrey)]'
					}`}
					type='text'
					placeholder={passwordError || 'Enter your Password'}
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 5,
							message: 'Password must be at least 5 characters long',
						},
						pattern: {
							value: /^(?=.*[A-Z])[A-Za-z0-9]{5,}$/,
							message:
								'Password must contain at least one uppercase letter and no special characters',
						},
					})}
				/>
			</div>

			<div className='flex flex-col w-full px-[264px] py-[0px] gap-[24px]'>
				<ButtonComponent
					$background='GreenButton'
					$borderradius='62px'
					$color='black'
					$fontSize='18px'
					$fontWeight='400'
					$lineHeight='27px'
					$padding='18px 20px'
					$stretch='stretch'
				>
					Sign Up
				</ButtonComponent>
				<ButtonComponent
					$background='InputButton'
					$borderradius='62px'
					$color='white'
					$fontSize='18px'
					$fontWeight='400'
					$lineHeight='27px'
					$padding='18px 20px'
					$stretch='stretch'
				>
					Login
				</ButtonComponent>
				<div className='relative flex flex-col gap-[30px] items-center'>
					{/* Горизонтальные линии с боков */}
					<div className='relative w-full text-center'>
						<div className="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[calc(50%-80px)] before:h-[1px] before:bg-[var(--lightGrey)] after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[calc(50%-80px)] after:h-[1px] after:bg-[var(--lightGrey)]">
							<PTagComponent
								$tag='p'
								$color='grey'
								$fontSize='18px'
								$lineHeight='27px'
								$fontWeight={400}
								$fontFamily='Lexend'
							>
								Or Continue with
							</PTagComponent>
						</div>
					</div>
				</div>
				<div className='flex flex-row gap-[24px] justify-center'>
					<a href=''>
						<FaceBookIcon2 />
					</a>
					<a href=''>
						<GoogleIcon />
					</a>
					<a href=''>
						<AppleIcon />
					</a>
				</div>
			</div>
		</form>
	)
}

export default SignUpInputForm
