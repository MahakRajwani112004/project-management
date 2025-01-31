import { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useTasks } from '../../../../context/TaskContext';
import { Task } from '../../../../types/task.types';
import CustomButton from '../../../CustomButton';
import CustomInput from '../../../CustomInput';
import CustomSingleSelectDropdownV2 from '../../../CustomSingleSelectDropDown';
import { categoryOtpions, priorityOtpions } from '../../../../utils/constants';
import showToast from '../../../../utils/showToast';
import { NewTaskFormValidationSchema } from '../home.validation';

interface INewTaskFormProps {
	onClose: () => void;
}

const NewTaskForm = (props: INewTaskFormProps) => {
	const { onClose } = props;
	const { addTask } = useTasks();

	const NewTaskFormInitails: Task = {
		taskId: '',
		title: '',
		description: '',
		category: 'todo',
		status: 'low'
	};

	const handleSubmitValue = useCallback(
		(values: Task) => {
			const newTask = {
				taskId: Date.now().toString(),
				title: values.title,
				description: values.description,
				category: values.category,
				status: values.status
			};
			addTask(newTask, newTask.category);
			showToast('Task Added Successfully', 'success');
			onClose();
		},
		[addTask, onClose]
	);

	return (
		<div className="max-w-2xl">
			<h1 className="text-2xl font-semibold text-center mb-6">Create New Task</h1>

			<Formik
				initialValues={NewTaskFormInitails}
				validationSchema={NewTaskFormValidationSchema}
				onSubmit={handleSubmitValue}
			>
				{({ values, handleChange, handleBlur, setFieldValue, errors, touched }) => (
					<Form>
						<CustomInput
							label="Title"
							labelPlacement="outside"
							name="title"
							value={values?.title}
							placeholder="Enter task title"
							errorMessage={errors.title}
							isInvalid={!!(touched.title && errors.title)}
							labelColor="black"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<CustomInput
							label="Description"
							placeholder="Enter task description"
							value={values.description}
							errorMessage={errors.description}
							isInvalid={!!(touched.description && errors.description)}
							labelColor="black"
							name="description"
							labelPlacement="outside"
							onChange={handleChange}
							onBlur={handleBlur}
						/>

						<CustomSingleSelectDropdownV2
							onChange={selectedOption => {
								setFieldValue('status', selectedOption?.value);
							}}
							options={priorityOtpions}
							label="Select Priority of Task"
							isRequired
							isInvalid={!!errors.status}
							errorMessage={errors.status}
						/>
						<CustomSingleSelectDropdownV2
							onChange={selectedOption => {
								setFieldValue('category', selectedOption?.value);
							}}
							options={categoryOtpions}
							label="Select Category of Task"
							isRequired
							isInvalid={!!errors.category}
							errorMessage={errors.category}
						/>
						<div className="flex justify-center gap-5 mt-4">
							<CustomButton onPress={onClose}>Cancel</CustomButton>
							<CustomButton type="submit" className=" bg-blue">
								Add Task
							</CustomButton>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default NewTaskForm;
