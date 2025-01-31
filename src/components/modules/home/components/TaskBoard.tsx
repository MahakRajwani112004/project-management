import TaskColumn from './TaskColumn';

const TaskBoard = () => {
	return (
		<div className="flex gap-5 h-full">
			<TaskColumn category="todo" title="To Do" />
			<TaskColumn category="inProgress" title="In Progress" />
			<TaskColumn category="completed" title="Completed" />
		</div>
	);
};

export default TaskBoard;
