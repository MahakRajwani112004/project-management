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

	//Local variables
	const filteredTasks = tasks[category];

	//helper functions
	const toggleModal = () => setModalOpen(prev => !prev);

	const handleDropdownPress = async (selectedDropdownKey: React.Key, selectedTask: Task) => {
		if (!selectedDropdownKey || !selectedTask) return;

		switch (selectedDropdownKey) {
			case commonKey.view:
				console.log('View task:', selectedTask);
				break;
			case commonKey.edit:
				return;

			case commonKey.delete:
				removeTask(selectedTask.taskId, selectedTask.category);
				showToast('Deleted Successfully', 'success');
				break;

			case commonKey.change_status:
				return;

			default:
				return;
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

				<CustomButtonIcon Icon={<AddIcon />} className="bg-transparent" onPress={toggleModal} />
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

			<NewTaskModal isOpen={isModalOpen} onClose={toggleModal} />
		</div>
	);
};

export default TaskColumn;
