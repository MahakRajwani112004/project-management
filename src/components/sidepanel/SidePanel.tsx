import { Link } from 'react-router';
import { Divider } from '@nextui-org/react';
import { projectData, sidePanelItems } from '../../utils/constants';
import { LeftArrowIcon, Logo } from '../../assets/icon';
import CustomButtonIcon from '../CustomButtonIcon';

interface ISidePanelProps {
	collapsed: boolean;
	setCollapsed: (value: boolean) => void;
}

const SidePanel = (props: ISidePanelProps) => {
	const { collapsed, setCollapsed } = props;

	const toggleCollapse = () => setCollapsed(!collapsed);

	return (
		<div
			className={`h-screen fixed border-r bg-white transition-all duration-300   p-5 ${collapsed ? 'w-20' : 'w-72'}`}
		>
			<div className="flex items-center justify-between ">
				<div className="flex items-center">
					<Logo />

					{!collapsed && <h1 className="text-lg font-semibold">Project Management</h1>}
				</div>

				<CustomButtonIcon Icon={<LeftArrowIcon />} onPress={toggleCollapse} className="bg-transparent" />
			</div>

			<ul className="mt-6">
				{sidePanelItems?.map((data, index) => (
					<li key={index} className="mb-4 flex items-center">
						<Link to={data.url} className="flex items-center gap-2 text-gray-700 hover:text-black">
							<data.icon />
							{!collapsed && <span className="mb-1">{data.label}</span>}
						</Link>
					</li>
				))}
			</ul>

			{!collapsed && <Divider className="mr-2" />}
			{!collapsed && <h1 className="text-gray-700 mt-5">My Projects</h1>}

			<ul className="mt-6">
				{Object.entries(projectData).map(([key, { fillColor, name }]) => (
					<li key={key} className="mb-4 flex items-center gap-3">
						<div className={`h-2 w-2 ${fillColor} rounded-full`}></div>
						<div className="flex items-center gap-2 text-gray-700 hover:text-black">
							{!collapsed && <span className="mb-1">{name}</span>}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SidePanel;
