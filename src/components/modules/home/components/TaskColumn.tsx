import { useState } from 'react';
import { taskCategory } from '../../../../types/common.type';
import { Task } from '../../../../types/task.types';
import CustomButtonIcon from '../../../CustomButtonIcon';
import TaskCard from './TaskCard';
import NewTaskModal from '../../../modals/NewTaskModal';
import { AddIcon } from '../../../../assets/icon';
import { commonKey } from '../../../../utils/constants';
import showToast from '../../../../utils/showToast';
import { useTasks } from '../../../../context/TaskContextProvider';
import ChangeStatusModal from '../../../modals/ChangeStatusModal';

interface ITaskColumnProps {
	category: taskCategory;
	title?: string;
}

const TaskColumn = (props: ITaskColumnProps) => {
	//High level hooks
	const { category, title } = props;
	const { tasks, moveTask, removeTask } = useTasks();

	//Local State
	const [isModalOpen, setModalOpen] = useState(false);
	const [isChangeStatusModalOpen, setChangeStatusModalOpen] = useState(false);
	const [selectedTask, setSelectedTask] = useState<Task>();

	//Local variables
	const filteredTasks = tasks[category];

	//helper functions
	const toggleNewTaskModal = () => {
		setSelectedTask(undefined);
		setModalOpen(prev => !prev);
	};

	const toggleStatusModal = () => setChangeStatusModalOpen(prev => !prev);
	const handleDropdownPress = async (selectedDropdownKey: React.Key, task: Task) => {
		if (!selectedDropdownKey || !task) return;

		switch (selectedDropdownKey) {
			case commonKey.view:
				console.log('View task:', task);
				break;

			case commonKey.edit:
				setSelectedTask(task);
				toggleNewTaskModal();
				break;

			case commonKey.delete:
				removeTask(task.taskId, task.category);
				showToast('Deleted Successfully', 'success');
				break;

			case commonKey.change_status:
				setSelectedTask(task);
				toggleStatusModal();
				break;

			default:
				break;
		}
	};

	const handleDragEnd = (taskId: string, fromCategory: taskCategory, toCategory: taskCategory) => {
		if (fromCategory !== toCategory) {
			moveTask(taskId, fromCategory, toCategory);
		}
	};
	return (
		<div className="bg-whitesmoke rounded-xl border shadow-md w-full min-h-screen h-full items-center justify-center z-100 ">
			<div className="flex w-full justify-between p-5">
				<h1 className="font-bold">{title}</h1>

				<CustomButtonIcon Icon={<AddIcon />} className="bg-transparent" onPress={toggleNewTaskModal} />
			</div>
			<div>
				{filteredTasks.length > 0 ? (
					filteredTasks.map(task => (
						<TaskCard
							key={task.taskId}
							data={task}
							onDragEnd={handleDragEnd}
							handleDropdownPress={handleDropdownPress}
						/>
					))
				) : (
					<p className="text-center text-gray-500">No tasks available.</p>
				)}
			</div>

			<NewTaskModal isOpen={isModalOpen} onClose={toggleNewTaskModal} taskData={selectedTask} />
			<ChangeStatusModal isOpen={isChangeStatusModalOpen} onClose={toggleStatusModal} taskData={selectedTask} />
		</div>
	);
};

export default TaskColumn;
