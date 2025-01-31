import { useNavigate, type NavigateOptions } from 'react-router';
import { APP_ROUTES } from '../utils/constants';
import { useMemo } from 'react';

const useAppNavigate = () => {
	const navigate = useNavigate();

	const { APP, ROOT, SIGNIN, SIGNUP, ERROR, VERIFICATION } = APP_ROUTES;

	const typeSafeNavigate = useMemo(
		() => ({
			to: (path: string, option?: NavigateOptions) => navigate(path, option),
			goBack: (level = -1) => navigate(level),
			toError: (option?: NavigateOptions) => navigate(ERROR, option),

			// Unauthenticated routes
			toRoot: (option?: NavigateOptions) => navigate(ROOT, option),
			toSignIn: (option?: NavigateOptions) => navigate(SIGNIN, option),
			toSignUp: (option?: NavigateOptions) => navigate(SIGNUP, option),

			// Authenticated routes
			toVerification: (option?: NavigateOptions) => navigate(VERIFICATION, option),
			toDashboard: (option?: NavigateOptions) => navigate(APP.DASHBOARD, option),
			toProfile: (id: string, option?: NavigateOptions) => navigate(APP.PROFILE(id), option),
			toAccountManagement: (option?: NavigateOptions) => navigate(APP.ACCOUNT_MANAGEMENT, option),
			toAccountManagementDetails: (id: string, option?: NavigateOptions) =>
				navigate(APP.ACCOUNT_MANAGEMENT_DETAILS(id), option)
		}),
		[APP, ERROR, ROOT, SIGNIN, SIGNUP, VERIFICATION, navigate]
	);

	return typeSafeNavigate;
};

export default useAppNavigate;
