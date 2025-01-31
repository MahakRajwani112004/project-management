export interface Task {
	id: string;
	title: string;
	description: string;
}

export interface TaskState {
	todo: Task[];
	inProgress: Task[];
	completed: Task[];
}

export interface TaskContextProps {
	tasks: TaskState;
	addTask: (task: Task, category: keyof TaskState) => void;
	moveTask: (taskId: string, fromCategory: keyof TaskState, toCategory: keyof TaskState) => void;
	removeTask: (taskId: string, category: keyof TaskState) => void;
}
