import * as Yup from 'yup';

export const NewTaskFormValidationSchema = Yup.object({
	description: Yup.string()
		.required('Description is required')
		.min(10, 'Description must be at least 10 characters long'),
	title: Yup.string().required('Title is required').min(5, 'Title must be at least 5 characters long'),
	status: Yup.string().required('Required'),
	category: Yup.string().required('Required')
});
