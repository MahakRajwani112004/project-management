import React from 'react';
import { cn, Modal, ModalContent } from '@nextui-org/react';

interface ICustomModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	className?: string;
}

const CustomModal = (props: ICustomModalProps) => {
	const { isOpen, onClose, children, className } = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose} className={cn('p-10', className)}>
			<ModalContent>{children}</ModalContent>
		</Modal>
	);
};

export default CustomModal;
