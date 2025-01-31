interface CustomHeaderProps {
	title: string;
}

const CustomHeader = (props: CustomHeaderProps) => {
	const { title } = props;
	return (
		<header className="flex justify-between items-center ">
			<h1 className="text-2xl font-bold text-midnight">{title}</h1>
		</header>
	);
};

export default CustomHeader;
