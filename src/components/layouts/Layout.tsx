import { useState } from 'react';
import { Outlet } from 'react-router';
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
				className={`h-fit w-[calc(100vw - 100px)] xl:w-[calc(100vw - 200px)] ml-48  bg-white xl: ${
					isCollapsed ? 'ml-14' : 'ml-72'
				}  xl:pt-20 px-6 xl:px-9 pb-8  scroll-auto ml`}
			>
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
