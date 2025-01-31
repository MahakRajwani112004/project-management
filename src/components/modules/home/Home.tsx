import CustomCard from '../../CustomCard';

import CustomNewTaskModal from '../../CustomNewTaskModal';
import TaskBoard from './components/TaskBoard';

const Home = () => {
	return (
		<div className="flex gap-8 border h-screen border-red  ">
			<TaskBoard />
			<CustomCard taskId="1" category="todo">
				This is a detailed project report covering all aspects of design.
			</CustomCard>

			<CustomCard taskId="2" category="inProgress">
				High-fidelity design mockups for the new mobile application.
			</CustomCard>

			<CustomCard taskId="3" category="completed">
				Meeting notes for the product brainstorming session conducted last week.
			</CustomCard>

			<CustomNewTaskModal />
		</div>
	);
};

export default Home;
