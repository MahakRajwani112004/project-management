interface CustomHeaderProps {
	title: string;
}

const CustomHeader = (props: CustomHeaderProps) => {
	const { title } = props;
	return (
		<header className="w-full flex justify-between items-center my-5">
			<h1 className="text-2xl font-semibold text-midnight">{title}</h1>
		</header>
	);
};

export default CustomHeader;
