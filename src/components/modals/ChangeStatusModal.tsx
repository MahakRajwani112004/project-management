import { Task } from '../../types/task.types';
import CustomModal from '../CustomModal';
import ChangeStatusForm from '../modules/home/components/ChangeStatusForm';

interface IChangeStatusProps {
	isOpen: boolean;
	onClose: () => void;
	taskData?: Task;
}

const ChangeStatusModal = (props: IChangeStatusProps) => {
	const { isOpen, onClose, taskData } = props;
	return (
		<CustomModal isOpen={isOpen} onClose={onClose}>
			<ChangeStatusForm onClose={onClose} taskData={taskData} />
		</CustomModal>
	);
};

export default ChangeStatusModal;
