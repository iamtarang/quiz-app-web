/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CourseDD from '../components/CourseDD';

const CreateQuiz = () => {

	const navigate = useNavigate();

	const submitQuiz = () => {
		navigate('/dashboard/add-questions')
	}

	return (
		<>
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
											<Form.Label>Select Semester</Form.Label>
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
										</div>
										<div className="form-floating mb-3">
											<Form.Label>Select Subject</Form.Label>
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
								<div className="card-header"><h3 className="text-center font-weight-light my-4">Past Quizzes</h3></div>
								<div className="card-body">

								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default CreateQuiz