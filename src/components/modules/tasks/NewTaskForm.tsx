import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const TaskForm = () => {
	// Validation schema
	const validationSchema = Yup.object({
		description: Yup.string()
			.required('Description is required')
			.min(10, 'Description must be at least 10 characters long'),
		fileSize: Yup.number()
			.required('File Size is required')
			.positive('File Size must be a positive number')
			.integer('File Size must be an integer')
			.min(1, 'File Size must be at least 1 MB'),
		allowDownload: Yup.boolean()
	});

	return (
		<div className="max-w-xl ">
			<h1 className="text-2xl font-semibold text-center mb-6">Create New Task</h1>
			<Formik
				initialValues={{
					description: '',
					fileSize: '',
					allowDownload: false
				}}
				validationSchema={validationSchema}
				onSubmit={values => {
					console.log('Form Submitted:', values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="mb-4">
							<label htmlFor="description" className="block mb-2">
								Description
							</label>
							<Field
								id="description"
								name="description"
								as="textarea"
								className={`w-full p-2 border ${
									errors.description && touched.description ? 'border-red' : 'border-gray-300'
								} rounded`}
							/>
							{errors.description && touched.description && (
								<div className="text-warning text-sm">{errors.description}</div>
							)}
						</div>

						<div className="mb-4">
							<label htmlFor="fileSize" className="block mb-2">
								File Size (in MB)
							</label>
							<Field
								id="fileSize"
								name="fileSize"
								type="number"
								className={`w-full p-2 border ${
									errors.fileSize && touched.fileSize ? 'border-red-500' : 'border-gray-300'
								} rounded`}
							/>
							{errors.fileSize && touched.fileSize && <div className="text-red-500 text-sm">{errors.fileSize}</div>}
						</div>

						<div className="mb-4 flex items-center">
							<Field id="allowDownload" name="allowDownload" type="checkbox" className="mr-2" />
							<label htmlFor="allowDownload" className="text-sm">
								Allow others to download
							</label>
						</div>

						<div className="mb-4 ">
							<button type="submit" className="w-full bg-blue py-2 rounded-lg">
								Submit
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TaskForm;
