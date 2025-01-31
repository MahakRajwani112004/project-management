import { HomeIcon, MembersIcon, MessageIcon, SettingsIcon, TaskIcon } from '../assets/icon';
import { ICustomDropdownMenuItem } from '../types/common.type';
import { Task } from '../types/task.types';

export const APP_ROUTES = {
	ROOT: '/',
	ERROR: '/error',

	APP: {
		ROOT: '/app',
		HOME: '/app/home',
		MESSAGES: '/app/messages',
		TASKS: '/app/tasks',
		MEMBERS: '/app/members',
		SETTING: '/app/setting'
	}
};

export const sidePanelItems = [
	{
		icon: HomeIcon,
		label: 'Home',
		url: APP_ROUTES.APP.HOME
	},
	{
		icon: MessageIcon,
		label: 'Messages',
		url: APP_ROUTES.APP.MESSAGES
	},
	{
		icon: TaskIcon,
		label: 'Tasks',
		url: APP_ROUTES.APP.TASKS
	},
	{
		icon: MembersIcon,
		label: 'Members',
		url: APP_ROUTES.APP.MEMBERS
	},
	{
		icon: SettingsIcon,
		label: 'Setting',
		url: APP_ROUTES.APP.SETTING
	}
];

export const projectData = [
	{
		fillColor: 'bg-red',
		name: 'Mobile App'
	},
	{
		fillColor: 'bg-blue',
		name: 'Website Redesign'
	},
	{
		fillColor: 'bg-green',
		name: 'Website Redesign'
	},
	{
		fillColor: 'bg-purple-400 ',
		name: 'Wireframe'
	}
];

export const todoInitial: Task[] = [
	{
		taskId: '1',
		category: 'todo',
		title: 'Complete Project',
		description: 'Finalize the project by this weekend',
		status: 'high'
	}
];

export const inProgressInitial: Task[] = [
	{
		taskId: '2',
		category: 'inProgress',
		title: 'Write Documentation',
		description: 'Create user documentation for the project',
		status: 'medium'
	}
];

export const completedInitial: Task[] = [
	{
		taskId: '3',
		category: 'completed',
		title: 'Review PRs',
		description: 'Reviewed pull requests from the dev team',
		status: 'completed'
	}
];

export const priorityOtpions = [
	{ label: 'Low', value: 'low' },
	{ label: 'High', value: 'high' },
	{ label: 'Medium', value: 'medium' },
	{ label: 'Completed', value: 'completed' }
];

export const categoryOtpions = [
	{ label: 'To do', value: 'todo' },
	{ label: 'In Progress', value: 'inProgress' },
	{ label: 'Completed', value: 'completed' }
];

export const commonKey = {
	view: 'view',
	edit: 'edit',
	delete: 'delete',
	change_status: 'change_status'
};
export const actionsItems: ICustomDropdownMenuItem[] = [
	{ key: commonKey.view, title: 'View' },
	{ key: commonKey.edit, title: 'Edit' },
	{ key: commonKey.change_status, title: 'Change Status' },
	{ key: commonKey.delete, title: 'Delete' }
];
