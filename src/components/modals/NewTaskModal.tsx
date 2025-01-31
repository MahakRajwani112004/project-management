import { Task } from '../../types/task.types';
import CustomModal from '../CustomModal';
import NewTaskForm from '../modules/home/components/NewTaskForm';

interface INewTaskModalProps {
	isOpen: boolean;
	onClose: () => void;
	taskData?: Task;
}

const NewTaskModal = (props: INewTaskModalProps) => {
	const { isOpen, onClose, taskData } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose}>
			<NewTaskForm onClose={onClose} taskData={taskData} />
		</CustomModal>
	);
};

export default NewTaskModal;
