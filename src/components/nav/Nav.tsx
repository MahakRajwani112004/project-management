import { Calender, MessageQuestionIcon, NotificationIcon, SearchIcon } from '../../assets/icon';
import CustomInput from '../CustomInput';

interface INavProps {
	isCollapsed?: boolean;
}

const Nav = (props: INavProps) => {
	const { isCollapsed } = props;
	return (
		<nav
			className={`flex justify-between items-center fixed z-50 bg-white left-0 right-0 pr-10 py-3 border ${
				isCollapsed ? 'ml-20' : 'ml-72'
			}`}
		>
			<div className=" flex justify-center items-center ml-4">
				<CustomInput placeholder="Search Anything" label="" name="search" StartContent={<SearchIcon />} />
			</div>
			<div className="flex items-center gap-4 pr-4">
				<Calender />
				<MessageQuestionIcon />
				<NotificationIcon />
				<span className="font-semibold">Mahak Rajwani</span>
			</div>
		</nav>
	);
};

export default Nav;
