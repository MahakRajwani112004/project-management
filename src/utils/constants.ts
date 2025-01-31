import { HomeIcon, MembersIcon, MessageIcon, SettingsIcon, TaskIcon } from '../assets/icon';

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

export const sidePanelItems = {
	HOME: {
		icon: HomeIcon,
		label: 'Home',
		url: APP_ROUTES.APP.HOME
	},
	MESSAGES: {
		icon: MessageIcon,
		label: 'Messages',
		url: APP_ROUTES.APP.MESSAGES
	},
	TASKS: {
		icon: TaskIcon,
		label: 'Tasks',
		url: APP_ROUTES.APP.TASKS
	},
	MEMBERS: {
		icon: MembersIcon,
		label: 'Members',
		url: APP_ROUTES.APP.MEMBERS
	},
	SETTING: {
		icon: SettingsIcon,
		label: 'Setting',
		url: APP_ROUTES.APP.SETTING
	}
};

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
