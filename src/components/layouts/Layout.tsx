import { useState } from 'react';
import { Outlet } from 'react-router';
import { cn } from '@nextui-org/react';
import Nav from '../nav/Nav';
import SidePanel from '../sidepanel/SidePanel';

const Layout = () => {
	//Local State
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className="h-full   bg-screen">
			<SidePanel collapsed={isCollapsed} setCollapsed={setIsCollapsed} />

			<Nav isCollapsed={isCollapsed} />

			<div
				className={cn('h-fit w-full xl:w-[calc(100vw - 200px)] bg-white xl:pt-20 px-6 xl:px-9 pb-8', {
					'ml-12': isCollapsed,
					'ml-72': !isCollapsed
				})}
			>
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
