import { useState } from 'react';
import { Outlet } from 'react-router';
import { cn } from '@nextui-org/react';
import Nav from '../nav/Nav';
import SidePanel from '../sidepanel/SidePanel';

const Layout = () => {
	//Local State
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className="h-full   bg-screen  overflow-x-hidden">
			<SidePanel collapsed={isCollapsed} setCollapsed={setIsCollapsed} />

			<Nav isCollapsed={isCollapsed} />

			<div
				className={cn('h-fit  bg-white xl:pt-20 px-4 xl:px-14 pb-8  overflow-x-hidden', {
					'ml-16  xl:w-[calc(100vw-80px)]': isCollapsed,
					'ml-64  xl:w-[calc(100vw-256px)]': !isCollapsed
				})}
			>
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
