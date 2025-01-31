import { cn } from '@heroui/react';
import React from 'react';

interface IScreenWrapperProps {
	children: React.ReactNode;
	className?: string;
}

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({ children, className }) => {
	return (
		<div id="screen-parent" className={cn('h-screen bg-screen', className)}>
			{children}
		</div>
	);
};

export default ScreenWrapper;
