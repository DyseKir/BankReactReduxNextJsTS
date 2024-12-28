export type CardMode = 'TopCard' | 'BottomCard'

export type CardType =
	| 'managingPersonalFinances'
	| 'savingForTheFuture'
	| 'homeownership'
	| 'educationFunding'
	| 'StartupsAndEntrepreneurs'
	| 'CashFlowManagement'
	| 'BusinessExpansion'
	| 'PaymentSolutions'

export interface CardProps {
	type: CardType
	mode?: CardMode
}

export interface CardData {
	icon: {
		TopCard: string
		BottomCard: string
	}
	text: string
}
export const cardDataMap: Record<CardType, CardData> = {
	managingPersonalFinances: {
		icon: {
			TopCard: '/ManagingPersonaLIcon.svg',
			BottomCard: '',
		},
		text: 'Managing Personal Finances',
	},
	savingForTheFuture: {
		icon: {
			TopCard: '/SavingTheFutureIcon.svg',
			BottomCard: '',
		},
		text: 'Saving for the Future',
	},
	homeownership: {
		icon: {
			TopCard: '',
			BottomCard: '/HomeOwnerShipIcon.svg',
		},
		text: 'Homeownership',
	},
	educationFunding: {
		icon: {
			TopCard: '',
			BottomCard: '/EducationFundingIcon.svg',
		},
		text: 'Education Funding',
	},
	StartupsAndEntrepreneurs: {
		icon: {
			TopCard: '/StartupsIcon.svg',
			BottomCard: '',
		},
		text: 'Startups and Entrepreneurs',
	},
	CashFlowManagement: {
		icon: {
			TopCard: '/CashFlowIcon.svg',
			BottomCard: '',
		},
		text: 'Cash Flow Management',
	},
	BusinessExpansion: {
		icon: {
			TopCard: '',
			BottomCard: '/BusinessExpansionIcon.svg',
		},
		text: 'Business Expansion',
	},
	PaymentSolutions: {
		icon: {
			TopCard: '',
			BottomCard: '/PaymentSolutionsIcon.svg',
		},
		text: 'Payment Solutions',
	},
}
