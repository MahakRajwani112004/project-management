import { Button } from '@nextui-org/react';
import React from 'react';

interface ICustomButtonProps {
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

const CustomButton = (props: ICustomButtonProps) => {
	const { className, onClick, children } = props;
	return (
		<Button className={className} onPress={onClick}>
			{children}
		</Button>
	);
};
export default CustomButton;
