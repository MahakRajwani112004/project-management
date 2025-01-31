import { Routes as AppRoutes, Route } from 'react-router';

import { APP_ROUTES } from './utils/constants';
import Layout from './components/layouts/Layout';
import Home from './components/modules/home/pages/Home';
import { BrowserRouter } from 'react-router';
import Task from './components/modules/tasks/Task';
import Messages from './components/modules/messages/Messages';

const Routes = () => {
	return (
		<BrowserRouter>
			<AppRoutes>
				<Route path={APP_ROUTES.APP.ROOT} element={<Layout />}>
					<Route path={APP_ROUTES.APP.HOME} element={<Home />} />
					<Route path={APP_ROUTES.APP.TASKS} element={<Task />} />
					<Route path={APP_ROUTES.APP.MESSAGES} element={<Messages />} />
				</Route>
			</AppRoutes>
		</BrowserRouter>
	);
};

export default Routes;
