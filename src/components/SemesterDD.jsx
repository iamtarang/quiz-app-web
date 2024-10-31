/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getAllSemesters } from '../services/apis';
import SmallLoader from './SmallLoader';

const SemesterDD = () => {
	const [semester, setSemester] = useState('');

	const {
		data: semesterData,
		isLoading: semesterLoading,
		isError: semesterError
	} = useQuery({
		queryKey: ['semesterlist'],
		queryFn: getAllSemesters,
	});

	if (semesterLoading) {
		return <SmallLoader />;
	}

	if (semesterError) {
		return <div>Error: Unable to load semesters</div>;
	}

	const semesters = semesterData?.data || [];

	return (
		<>
			<Form.Group>
				{/* <Form.Label className='ms-1'>Select Semester</Form.Label> */}
				<Form.Select
					aria-label="Select semester"
					name="semester"
					value={semester}
					onChange={(e) => setSemester(e.target.value)}
					required
				>
					<option value="">Choose a semester</option>
					{semesters.map((semesterName) => (
						<option key={semesterName.id} value={semesterName.id}>
							{semesterName.semester}
						</option>
					))}
				</Form.Select>
			</Form.Group>
		</>
	);
};

export default SemesterDD;