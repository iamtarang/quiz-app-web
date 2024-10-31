/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getAllSubjects } from '../services/apis';
import SmallLoader from './SmallLoader';

const SubjectDD = () => {
	const [subject, setSubject] = useState('');

	const {
		data: subjectData,
		isLoading: subjectLoading,
		isError: subjectError
	} = useQuery({
		queryKey: ['subjectlist'],
		queryFn: getAllSubjects,
	});

	if (subjectLoading) {
		return <SmallLoader />;
	}

	if (subjectError) {
		return <div>Error: Unable to load subjects</div>;
	}

	const subjects = subjectData?.data || [];

	return (
		<>
			<Form.Group>
				{/* <Form.Label className='ms-1'>Select Subject</Form.Label> */}
				<Form.Select
					aria-label="Select subject"
					name="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					required
				>
					<option value="">Choose a subject</option>
					{subjects.map((subjectName) => (
						<option key={subjectName.id} value={subjectName.id}>
							{subjectName.subject}
						</option>
					))}
				</Form.Select>
			</Form.Group>
		</>
	);
};

export default SubjectDD;