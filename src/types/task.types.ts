import { status, taskCategory } from './common.type';
import { Status } from './enum';

export interface Task {
	taskId: string;
	category: taskCategory;
	title: string;
	description: string;
	status: status;
}

export interface TaskState {
	todo: Task[];
	inProgress: Task[];
	completed: Task[];
}

export interface TaskContextProps {
	tasks: TaskState;
	addTask: (task: Task, category: taskCategory) => void;
	moveTask: (taskId: string, fromCategory: taskCategory, toCategory: taskCategory) => void;
	removeTask: (taskId: string, category: taskCategory) => void;
	updateTaskStatus: (taskId: string, newStatus: Status, category: keyof TaskState) => void;
}
