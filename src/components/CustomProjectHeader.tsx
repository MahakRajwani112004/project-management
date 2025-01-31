import { LinkIcon, PencilIcon } from '../assets/icon';
import CustomHeader from './CustomHeader';

interface ICustomProjectHeader {
	title?: string;
}

const CustomProjectHeader = (props: ICustomProjectHeader) => {
	const { title = 'Project Title' } = props;
	return (
		<div className="flex gap-3 py-3">
			<CustomHeader title={title} />
			<PencilIcon />
			<LinkIcon />
		</div>
	);
};
export default CustomProjectHeader;
