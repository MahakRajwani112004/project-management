import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { DocIcon, DownloadIcon } from '../assets/icon';
import { TaskState } from '../types/task.types';
import { useTasks } from '../context/TaskContext';

interface ICustomCardProps {
	taskId: string;
	category: keyof TaskState;
	className?: string;
	onClick?: () => void;
	children: React.ReactNode;
}

const CustomCard = ({ taskId, category, className, onClick, children }: ICustomCardProps) => {
	const { removeTask } = useTasks(); // Use the context to remove task

	const handleRemove = () => {
		removeTask(taskId, category);
	};

	return (
		<motion.div drag>
			<Card
				className={`relative w-60 h-72 bg-sky-200 rounded-[50px] m-10 cursor-pointer ${className}`}
				onPress={onClick}
			>
				<CardBody className="px-8 py-10">
					<DocIcon />
					{children}
					<div className="absolute bottom-0 left-0 h-10 w-full px-8">
						<div className="flex items-center justify-between w-full">
							<h5>.4 MB</h5>
							<DownloadIcon />
						</div>
					</div>
				</CardBody>
				<div className="w-full py-4 flex justify-center text-sm font-semibold bg-green-600">
					<h3>Download</h3>
				</div>
			</Card>
			<motion.div
				className="absolute top-0 right-0"
				whileHover={{ scale: 1.2 }}
				onClick={handleRemove} // Remove on click
			>
				🗑️ {/* Trash icon for removal */}
			</motion.div>
		</motion.div>
	);
};

export default CustomCard;
