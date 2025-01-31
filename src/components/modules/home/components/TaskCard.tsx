import { motion } from 'framer-motion';
import { DocIcon, DotIcon, MessageIcon } from '../../../../assets/icon';
import CustomChip from '../../../CustomStatusChip';
import { Task } from '../../../../types/task.types';
import CustomDropdownMenu from '../../../CustomDropDownMenu';
import { actionsItems } from '../../../../utils/constants';
import { taskCategory } from '../../../../types/common.type';
import CustomCard from '../../../CustomCard';

interface ITaskCardProps {
	data: Task;
	className?: string;
	onDragEnd: (taskId: string, fromCategory: taskCategory, toCategory: taskCategory) => void;
	onClick?: () => void;
	handleDropdownPress: (selectedDropdownKey: React.Key, selectedTask: Task) => void;
}

const TaskCard = (props: ITaskCardProps) => {
	const { data, className, onClick, onDragEnd, handleDropdownPress } = props;
	const { taskId, title, category, status = 'low', description } = data;
	const handleDropdownAction = (selectedKey: React.Key) => {
		handleDropdownPress(selectedKey, data);
	};

	return (
		<motion.div
			drag
			onDragEnd={() => {
				onDragEnd(taskId, category, category);
			}}
		>
			<CustomCard onPress={onClick} className={className}>
				<div className="flex justify-between">
					<CustomChip variant={status} />
					<CustomDropdownMenu showArrow={false} items={actionsItems} onAction={handleDropdownAction}>
						<div className="p-4 z-20">
							<DotIcon />
						</div>
					</CustomDropdownMenu>
				</div>
				<h1 className="font-bold">{title}</h1>
				<p>{description}</p>

				<div className=" flex py-6   justify-end gap-3">
					<MessageIcon /> <p className="text-sm">12 comments</p>
					<DocIcon />
					<p className="text-sm">0 files</p>
				</div>
			</CustomCard>
		</motion.div>
	);
};

export default TaskCard;
