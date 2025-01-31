import 'react-toastify/dist/ReactToastify.css';

import Routes from './Routes';
import { NextUIProvider } from '@nextui-org/react';

import { ToastContainer } from 'react-toastify';
import { TaskProvider } from './context/TaskContextProvider';

const App = () => {
	return (
		<NextUIProvider>
			<TaskProvider>
				<Routes />
				<ToastContainer
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick={true}
					rtl={false}
					draggable
				/>
			</TaskProvider>
		</NextUIProvider>
	);
};

export default App;
