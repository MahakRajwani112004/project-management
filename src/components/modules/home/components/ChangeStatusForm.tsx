import { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useTasks } from '../../../../context/TaskContextProvider';
import { Task } from '../../../../types/task.types';
import CustomButton from '../../../CustomButton';
import CustomSingleSelectDropdownV2 from '../../../CustomSingleSelectDropDown';
import { priorityOtpions } from '../../../../utils/constants';
import showToast from '../../../../utils/showToast';
import { statusType } from '../../../../types/common.type';

interface IChangeStatusProps {
	onClose: () => void;
	taskData?: Task;
}

const ChangeStatusForm = (props: IChangeStatusProps) => {
	const { onClose, taskData } = props;
	const { updateTaskStatus } = useTasks();

	const ChangeStatusInitials: statusType = {
		status: taskData?.status || 'low'
	};

	const handleSubmitValue = useCallback(
		(values: statusType) => {
			const newStatus = values.status;
			console.log(newStatus);
			if (taskData) {
				updateTaskStatus(taskData.taskId, newStatus, taskData.category);
				showToast('Task Status Updated Successfully', 'success');
			}

			onClose();
		},
		[taskData, onClose, updateTaskStatus]
	);
	return (
		<div className="max-w-2xl">
			<h1 className="text-2xl font-semibold text-center mb-6">Change Task Status</h1>

			<Formik initialValues={ChangeStatusInitials} onSubmit={handleSubmitValue}>
				{({ values, setFieldValue, errors }) => (
					<Form>
						<CustomSingleSelectDropdownV2
							onChange={selectedOption => {
								setFieldValue('status', selectedOption?.value);
							}}
							options={priorityOtpions}
							label="Select Priority of Task"
							value={priorityOtpions.find(options => options.value === values.status) || null}
							isRequired
							isInvalid={!!errors.status}
							errorMessage={errors.status}
						/>

						<div className="flex justify-center gap-5 mt-4">
							<CustomButton onPress={onClose}>Cancel</CustomButton>
							<CustomButton type="submit" className="bg-blue">
								Change Status
							</CustomButton>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ChangeStatusForm;
