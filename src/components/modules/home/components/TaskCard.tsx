import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { DocIcon, DotIcon, MessageIcon } from '../../../../assets/icon';
import CustomChip from '../../../CustomStatusChip';
import { Task } from '../../../../types/task.types';
import CustomDropdownMenu from '../../../CustomDropDownMenu';
import { actionsItems } from '../../../../utils/constants';
import { taskCategory } from '../../../../types/common.type';

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
				console.log('Card touched ', taskId, category, category);
				onDragEnd(taskId, category, category);
			}}
		>
			<Card
				className={`relative bg-whitesmoke rounded-xl m-10 cursor-pointer min-w-72 min-h-32 ${className} z-10`}
				onPress={onClick}
			>
				<CardBody className="px-8 py-10">
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
				</CardBody>
				<CardFooter className=" flex p-8  justify-end gap-3">
					<MessageIcon /> <p className="text-sm">12 comments</p>
					<DocIcon />
					<p className="text-sm">0 files</p>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default TaskCard;
