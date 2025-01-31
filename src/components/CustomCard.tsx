import { Card, CardBody, CardFooter, cn } from '@nextui-org/react';

interface ICustomCardProps {
	className?: string;
	cardBodyClassName?: string;
	children?: React.ReactNode;
	footerContent?: React.ReactNode;
	onPress?: () => void;
}

const CustomCard = (props: ICustomCardProps) => {
	const { className, cardBodyClassName, children, footerContent, onPress } = props;

	return (
		<Card
			className={cn('relative bg-whitesmoke rounded-xl m-10 cursor-pointer min-w-72 min-h-32 z-10 p-4', className)}
			onPress={onPress}
		>
			<CardBody className={(cn(' py-10'), cardBodyClassName)}>{children}</CardBody>
			<CardFooter>{footerContent}</CardFooter>
		</Card>
	);
};

export default CustomCard;
