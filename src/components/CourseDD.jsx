/* eslint-disable no-unused-vars */
// import { Form } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { getAllCourses, useCourses } from '../services/apis';
import { useQuery } from '@tanstack/react-query';


const CourseDD = () => {

	const {
		status: courseStatus,
		data: courseData,
		isLoading: courseLoading,
		error: courseError } = useQuery({
			queryKey: ['courselist'],
			queryFn: getAllCourses,
			
		});

		if(courseLoading){
			return <></>
		}


	return (
		<>
			<Form.Label>Select Course</Form.Label>
			<Form.Select
				aria-label="Default select example"
				name='type'
			// value={category}
			// onChange={(e) => {
			// 	getCategory()
			// 	setCategory(parseInt(e.target.value))
			// }}
			// required
			>
				{/* {categoryItems} */}
			</Form.Select>
		</>
	)
}

export default CourseDD