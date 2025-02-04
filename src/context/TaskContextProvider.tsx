import React, { createContext, useState, useContext } from 'react';
import { Task, TaskContextProps, TaskState } from '../types/task.types';
import { completedInitial, inProgressInitial, todoInitial } from '../utils/constants';
import { status } from '../types/common.type';

interface ITaskContextProviderProps {
	children: React.ReactNode;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskContext = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error('useTaskContext must be used within a TaskProvider');
	}
	return context;
};

export const TaskProvider = (props: ITaskContextProviderProps) => {
	const { children } = props;

	const initialTasks: TaskState = {
		todo: todoInitial,
		inProgress: inProgressInitial,
		completed: completedInitial
	};

	const [tasks, setTasks] = useState<TaskState>(initialTasks);
	//ADD New Task
	const addTask = (task: Task, category: keyof TaskState) => {
		setTasks(prev => ({
			...prev,
			[category]: [...prev[category], task]
		}));
	};
	const updateTaskStatus = (taskId: string, newStatus: status, category: keyof TaskState) => {
		setTasks(prevTasks => ({
			...prevTasks,
			[category]: prevTasks[category].map(task => (task.taskId === taskId ? { ...task, status: newStatus } : task))
		}));
	};

	const moveTask = (taskId: string, fromCategory: keyof TaskState, toCategory: keyof TaskState) => {
		setTasks(prev => {
			const sourceCategory = [...prev[fromCategory]];
			const targetCategory = [...prev[toCategory]];

			const taskIndex = sourceCategory.findIndex(task => task.taskId === taskId);
			if (taskIndex === -1) return prev;

			const [taskToMove] = sourceCategory.splice(taskIndex, 1);
			targetCategory.push(taskToMove);

			return {
				...prev,
				[fromCategory]: sourceCategory,
				[toCategory]: targetCategory
			};
		});
	};
	//DELETE Task
	const removeTask = (taskId: string, category: keyof TaskState) => {
		setTasks(prev => ({
			...prev,
			[category]: prev[category].filter(task => task.taskId !== taskId)
		}));
	};
	//EDIT Task
	const editTask = (updatedTask: Task, category: keyof TaskState) => {
		setTasks(prev => ({
			...prev,
			[category]: prev[category].map(task => (task.taskId === updatedTask.taskId ? updatedTask : task))
		}));
	};
	return (
		<TaskContext.Provider value={{ tasks, addTask, moveTask, removeTask, updateTaskStatus, editTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTasks = () => {
	const context = useContext(TaskContext);
	if (!context) throw new Error('useTasks must be used within a TaskProvider');
	return context;
};
