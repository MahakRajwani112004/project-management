import { Outlet } from 'react-router';
import Nav from '../nav/Nav';
import SidePanel from '../sidepanel/SidePanel';
import { useState } from 'react';

const Layout = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	return (
		<div className="min-h-screen   bg-screen">
			<SidePanel collapsed={isCollapsed} setCollapsed={setIsCollapsed} />

			<Nav isCollapsed={isCollapsed} />

			<div
				className={`h-fit w-[calc(100vw - 100px)] xl:w-[calc(100vw - 200px)] ml-48 xl: ${
					isCollapsed ? 'ml-20' : 'ml-72'
				}  xl:pt-20 px-6 xl:px-8 pb-8  scroll-auto`}
			>
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
