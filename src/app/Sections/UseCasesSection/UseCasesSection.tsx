import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import { PTagComponent } from '@/app/UI/PTag/Ptag'
import { HtagComponent } from '@/app/UI/HTag/Htag'
import Card from './Card'

function UseCasesSection() {
	return (
		<section className='my-[150px] flex flex-col gap-[80px]'>
			<SectionHeader mode='UseCasesSection' />
			<div className='flex flex-col gap-[60]'>
				<div className='flex gap-[60]'>
					<article className='flex flex-wrap gap-[20px] p-[40px] bg-[var(--lightBlack)] rounded-[20px] justify-center'>
						<Card mode='TopCard' type={'managingPersonalFinances'} />
						<Card mode='TopCard' type={'savingForTheFuture'} />
						<Card mode='BottomCard' type={'homeownership'} />
						<Card mode='BottomCard' type={'educationFunding'} />
					</article>
					<article className='flex flex-col max-w-[738px] gap-[14px]'>
						<HtagComponent
							$tag='h2'
							$fontFamily='Lexend'
							$fontSize='30px'
							$color='white'
							$fontWeight={500}
						>
							For Individuals
						</HtagComponent>
						<div className='flex flex-col gap-[62px]'>
							<PTagComponent
								$tag='p'
								$fontFamily='Lexend'
								$color='grey'
								$fontSize='18px'
								$lineHeight='27px'
								$fontWeight={300}
							>
								For individuals, our mortgage services pave the way to
								homeownership, and our flexible personal loans provide vital
								support during various life milestones. We also prioritize
								retirement planning, ensuring a financially secure future for
								our customers
							</PTagComponent>
							<div className='flex flex-row gap-[50px]'>
								<div>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='green'
										$fontSize='58px'
										$lineHeight='87px'
										$fontWeight={500}
									>
										78%
									</PTagComponent>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='grey'
										$fontSize='18px'
										$lineHeight='27px'
										$fontWeight={300}
									>
										Secure Retirement Planning
									</PTagComponent>
								</div>
								<div className='h-full border-l border-dashed border-[var(--darkGrey)]'></div>
								<div>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='green'
										$fontSize='58px'
										$lineHeight='87px'
										$fontWeight={500}
									>
										63%
									</PTagComponent>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='grey'
										$fontSize='18px'
										$lineHeight='27px'
										$fontWeight={300}
									>
										Manageable Debt Consolidation
									</PTagComponent>
								</div>
								<div className='h-full border-l border-dashed border-[var(--darkGrey)]'></div>
								<div>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='green'
										$fontSize='58px'
										$lineHeight='87px'
										$fontWeight={500}
									>
										91%
									</PTagComponent>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='grey'
										$fontSize='18px'
										$lineHeight='27px'
										$fontWeight={300}
									>
										Reducing financial burdens
									</PTagComponent>
								</div>
							</div>
						</div>
					</article>
				</div>
				<div className='flex flex-row-reverse gap-[60]'>
					<article className='flex flex-wrap gap-[20px] p-[40px] bg-[var(--lightBlack)] rounded-[20px] justify-center'>
						<Card mode='TopCard' type={'StartupsAndEntrepreneurs'} />
						<Card mode='TopCard' type={'CashFlowManagement'} />
						<Card mode='BottomCard' type={'BusinessExpansion'} />
						<Card mode='BottomCard' type={'PaymentSolutions'} />
					</article>
					<article className='flex flex-col max-w-[738px] gap-[14px]'>
						<HtagComponent
							$tag='h2'
							$fontFamily='Lexend'
							$fontSize='30px'
							$color='white'
							$fontWeight={500}
						>
							For Business
						</HtagComponent>
						<div className='flex flex-col gap-[62px]'>
							<PTagComponent
								$tag='p'
								$fontFamily='Lexend'
								$color='grey'
								$fontSize='18px'
								$lineHeight='27px'
								$fontWeight={300}
							>
								For businesses, we empower growth with working capital solutions
								that optimize cash flow, and our tailored financing options fuel
								business expansion. Whatever your financial aspirations,
								YourBank is committed to providing the right tools and support
								to achieve them
							</PTagComponent>
							<div className='flex flex-row gap-[50px] items-center relative'>
								{/* Первый блок */}
								<div className='relative'>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='green'
										$fontSize='58px'
										$lineHeight='87px'
										$fontWeight={500}
									>
										65%
									</PTagComponent>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='grey'
										$fontSize='18px'
										$lineHeight='27px'
										$fontWeight={300}
									>
										Cash Flow Management
									</PTagComponent>
								</div>

								{/* Вертикальная линия между первым и вторым блоками */}
								<div className='h-full border-l border-dashed border-[var(--darkGrey)]'></div>

								{/* Второй блок */}
								<div className='relative'>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='green'
										$fontSize='58px'
										$lineHeight='87px'
										$fontWeight={500}
									>
										70%
									</PTagComponent>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='grey'
										$fontSize='18px'
										$lineHeight='27px'
										$fontWeight={300}
									>
										Drive Business Expansion
									</PTagComponent>
								</div>

								{/* Вертикальная линия между вторым и третьим блоками */}
								<div className='h-full border-l border-dashed border-[var(--darkGrey)]'></div>

								{/* Третий блок */}
								<div className='relative'>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='green'
										$fontSize='58px'
										$lineHeight='87px'
										$fontWeight={500}
									>
										45%
									</PTagComponent>
									<PTagComponent
										$tag='p'
										$fontFamily='Lexend'
										$color='grey'
										$fontSize='18px'
										$lineHeight='27px'
										$fontWeight={300}
									>
										Streamline payroll processing
									</PTagComponent>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	)
}

export default UseCasesSection
