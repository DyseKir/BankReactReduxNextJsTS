import { WithChildren, WithClassName } from '@/app/shared/types/common.types'
import { classnames } from '@/app/Utils/classnames'

type CustomCardProps = WithChildren &
	WithClassName & {
		disabled?: boolean
	}

export function CustomCard(props: CustomCardProps) {
	const { children, className, disabled } = props

	return (
		<div
			className={classnames('flex align-items gap-2 justify-center', className)}
		>
			<div>
				<div>SECTION 1</div>

				<div>SECTION 2</div>

				<div>SECTION 3</div>

				<div>SECTION 4</div>
			</div>

			{children}

			<button disabled={disabled}>Submit</button>
		</div>
	)
}
