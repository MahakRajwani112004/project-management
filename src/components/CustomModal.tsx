import React from 'react';
import { Modal, ModalContent } from '@nextui-org/react';

interface ICustomModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

const CustomModal = (props: ICustomModalProps) => {
	const { isOpen, onClose, children } = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose} className="p-10">
			<ModalContent>{children}</ModalContent>
		</Modal>
	);
};

export default CustomModal;
