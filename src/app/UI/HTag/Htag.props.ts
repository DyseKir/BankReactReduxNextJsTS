export interface HTagProps extends React.HTMLAttributes<HTMLHeadingElement> {
	$tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	$fontFamily?: 'Lexend' | 'Inter'
	$fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
	$fontSize?:
		| '12px'
		| '14px'
		| '16px'
		| '18px'
		| '20px'
		| '22px'
		| '24px'
		| '28px'
		| '30px'
		| '32px'
		| '40px'
		| '48px'
	$lineHeight?: '27px' | '32px' | '36px' | '45px' | '60px' | '72px' | 'normal'
	$color?: 'white' | 'black' | 'green' | 'grey'
}
