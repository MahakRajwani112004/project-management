import React from 'react';
import { motion } from 'framer-motion';
import { useTasks } from '../../../../context/TaskContext';
import CustomCard from '../../../CustomCard';

const TaskColumn = ({ title, tasks, category }: any) => {
	const { moveTask } = useTasks();

	const handleDragEnd = (event: any, info: any, taskId: string) => {
		const targetCategory = info.point.x < 300 ? 'todo' : info.point.x > 600 ? 'completed' : 'inProgress';
		if (targetCategory !== category) {
			moveTask(taskId, category, targetCategory);
		}
	};

	return (
		<div className="task-column">
			<h3>{title}</h3>
			<div className="task-list">
				{tasks.map((task: any) => (
					<motion.div
						key={task.id}
						drag
						dragMomentum={false}
						onDragEnd={(event, info) => handleDragEnd(event, info, task.id)}
						className="task-card"
					>
						<CustomCard taskId={task.id} category={category}>
							<h4>{task.title}</h4>
							<p>{task.description}</p>
						</CustomCard>
					</motion.div>
				))}
			</div>
		</div>
	);
};

const TaskBoard = () => {
	const { tasks } = useTasks();

	return (
		<div className="task-board">
			<TaskColumn title="To Do" tasks={tasks.todo} category="todo" />
			<TaskColumn title="In Progress" tasks={tasks.inProgress} category="inProgress" />
			<TaskColumn title="Completed" tasks={tasks.completed} category="completed" />
		</div>
	);
};

export default TaskBoard;
