import React from 'react';

export type status = 'low' | 'completed' | 'high' | 'medium';
export type taskCategory = 'todo' | 'inProgress' | 'completed';

export interface TaskData {
	taskId: string;
	title?: string;
	description?: string;
	status?: status;
	category: string;
}
export interface ISelectDropdownOptions {
	label: string;
	value: string;
}
export interface ICustomDropdownMenuItem {
	key: string;
	title: string;
	isHidden?: boolean;
	StartContent?: React.ReactNode;
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	description?: string;
	href?: string;
	isReadOnly?: boolean;
}

export interface RemoveTaskProps {
	id: string;
	category: taskCategory;
}
