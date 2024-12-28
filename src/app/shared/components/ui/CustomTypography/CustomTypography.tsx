import { WithChildren, WithClassName } from '@/app/shared/types/common.types'
import { classnames } from '@/app/Utils/classnames'
import { FC } from 'react'

type Props = WithChildren &
	WithClassName & {
		as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong'
	}

export const Typography: FC<Props> = ({
	as,
	children,
	className,
	...props
}) => {
	const Component = as ?? 'p'

	return (
		<Component
			className={classnames(
				'tracking-[0.05px]',
				{
					'text-slate-950':
						as === 'h1' ||
						as === 'h2' ||
						as === 'h3' ||
						as === 'h4' ||
						as === 'h5' ||
						as === 'h6',
					'text-xl font-medium tracking-[0.1px]': as === 'h1',
				},
				className
			)}
			{...props}
		>
			{children}
		</Component>
	)
}
