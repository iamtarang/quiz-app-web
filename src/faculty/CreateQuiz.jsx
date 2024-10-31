/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CourseDD from '../components/CourseDD';
import SemesterDD from '../components/SemesterDD';
import CustomTable from '../components/CustomTable';
import SubjectDD from '../components/SubjectDD';
import { QUIZZES } from '../services/react-table/Columns';
import { useQuery } from '@tanstack/react-query';
import { getAllQuiz } from '../services/apis';
import SmallLoader from '../components/SmallLoader';
import useAuth from '../hooks/useAuth';

const CreateQuiz = () => {

	const navigate = useNavigate();

	const { auth } = useAuth();
	console.log(auth?.id)


	const submitQuiz = () => {
		navigate('/dashboard/add-questions')
	}

	// Fetch table data with useQuery
	const {
		data: tableData,
		isLoading: tableLoading,
		isError: tableError
	} = useQuery({
		queryKey: ['tablelist'],
		queryFn: () => getAllQuiz({ id: auth?.id })
	});

	// Loading and error handling
	if (tableLoading) {
		return <SmallLoader />;
	}

	if (tableError) {
		return <div>Error: Unable to load quizzes</div>;
	}

	// Process table data
	const tables = tableData?.data || [];
	console.log(tableData)

	const tableHooks = (hooks) => {
		hooks.visibleColumns.push((columns) => [
			...columns,
			{
				id: 'actions',
				Header: "Actions",
				Cell: row => (
					<Stack direction='horizontal' gap={2}>
						
					</Stack>
				)
			}
		]);
	};

	const TableTitle = (
		<h5 className='d-flex my-auto'>List of Quizzes</h5>
	);

	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="card shadow-lg border-0 rounded-lg mt-5">
							<div className="card-header"><h3 className="text-center font-weight-light my-4">Create New Quiz</h3></div>
							<div className="card-body">
								<Form>
									<div className="form-floating mb-3">
										<Form.Control id="inputTitle" as='textarea' placeholder="Write your title here" />
										<Form.Label htmlFor="inputTitle">Enter Quiz Title</Form.Label>
									</div>
									<div className="form-floating mb-3">
										<CourseDD />
									</div>
									<div className="form-floating mb-3">
										<SemesterDD />
									</div>
									<div className="form-floating mb-3">
										<SubjectDD />
									</div>
									<div className="mt-4 mb-0">
										<div className="d-grid">
											<Button className="btn btn-primary btn-block"
												onClick={submitQuiz}
											>
												Create Quiz
											</Button>
										</div>
									</div>
								</Form>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="card shadow-lg border-0 rounded-lg mt-5">
							<CustomTable
								TableTitle={TableTitle}
								TableData={tables}
								tableHooks={tableHooks}
								COLUMN_DATA={QUIZZES}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default CreateQuiz