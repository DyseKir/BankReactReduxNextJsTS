export interface PTagProps extends React.HTMLAttributes<HTMLParagraphElement> {
	$tag?: 'p'
	$fontFamily?: 'Lexend' | 'Inter'
	$fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
	$fontSize?:
		| '12px'
		| '14px'
		| '16px'
		| '18px'
		| '20px'
		| '24px'
		| '32px'
		| '48px'
		| '58px'
	$lineHeight?: '24px' | '27px' | '32px' | '60px' | '72px' | '87px' | 'normal'
	$color?: 'white' | 'black' | 'green' | 'grey'
}
