/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getAllCourses } from '../services/apis';
import SmallLoader from './SmallLoader';

const CourseDD = () => {
	const [course, setCourse] = useState('');

	const {
		data: courseData,
		isLoading: courseLoading,
		isError: courseError
	} = useQuery({
		queryKey: ['courselist'],
		queryFn: getAllCourses,
	});

	if (courseLoading) {
		return <SmallLoader />;
	}

	if (courseError) {
		return <div>Error: Unable to load courses</div>;
	}

	const courses = courseData?.data?.data || [];

	return (
		<>
			<Form.Group>
				{/* <Form.Label className='ms-1'>Select Course</Form.Label> */}
				<Form.Select
					aria-label="Select course"
					name="course"
					value={course}
					onChange={(e) => setCourse(e.target.value)}
					required
				>
					<option value="">Choose a course</option>
					{courses.map((courseName) => (
						<option key={courseName.id} value={courseName.id}>
							{courseName.course_name}
						</option>
					))}
				</Form.Select>
			</Form.Group>
		</>
	);
};

export default CourseDD;