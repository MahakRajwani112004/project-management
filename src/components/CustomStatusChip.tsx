import { Chip, cn } from '@nextui-org/react';
import { status } from '../types/common.type';
import { Status } from '../types/enum';

interface ICustomChip {
	className?: string;
	variant?: status;
}

const CustomChip = (props: ICustomChip) => {
	const { className, variant = 'medium' } = props;

	const variantStyles: Record<string, string> = {
		low: 'bg-goldMist text-richGold',
		completed: 'bg-darkGreen text-forestGreen',
		high: 'bg-brandRed text-warmRed',
		medium: 'bg-softSky text-mutedBlue'
	};
	const variantClass = variantStyles[variant];
	const chipText = Status[variant];

	return <Chip className={cn(variantClass, className)}>{chipText}</Chip>;
};
export default CustomChip;
