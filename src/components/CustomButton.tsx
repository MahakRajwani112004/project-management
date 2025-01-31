import { Button } from '@nextui-org/react';
import React from 'react';

interface ICustomButtonProps {
	className?: string;
	onPress?: () => void;
	type?: 'button' | 'submit' | 'reset';
	buttonRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	children: React.ReactNode;
}

const CustomButton = (props: ICustomButtonProps) => {
	const { className, onPress, children, type, buttonRadius } = props;
	return (
		<Button className={className} onPress={onPress} type={type} radius={buttonRadius}>
			{children}
		</Button>
	);
};
export default CustomButton;
