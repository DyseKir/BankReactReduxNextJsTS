export type ButtonProps = {
	children: React.ReactNode
	onClick?: () => void
	$background?:
		| 'GreenButton'
		| 'GhostButton'
		| 'ExchangeButton'
		| 'FeaturesButton'
		| 'FeaturesButtonActive'
		| 'InputButton'
	$color?: 'white' | 'black' | 'green'
	$border?: string
	$borderradius?: '62px' | '70px' | '82px' | '100px' | '140px'
	$padding?:
		| '14px 24px'
		| '14px 26px'
		| '14px 30px'
		| '18px 20px'
		| '18px 24px'
		| '18px 30px'
	$stretch?: 'stretch' | 'none' | 'start' | 'center' | 'end'
	$fontSize?: '12px' | '14px' | '16px' | '18px' | '20px'
	$lineHeight?: '27px' | '32px' | '36px' | '60px' | '72px' | 'normal'
	$fontWeight?:
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900'
	hover?: boolean
}
