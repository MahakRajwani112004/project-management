import CustomModal from '../CustomModal';
import NewTaskForm from '../modules/home/components/NewTaskForm';

interface INewTaskModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const NewTaskModal = (props: INewTaskModalProps) => {
	const { isOpen, onClose } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose}>
			<NewTaskForm onClose={onClose} />
		</CustomModal>
	);
};

export default NewTaskModal;
