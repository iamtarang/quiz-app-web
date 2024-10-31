/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { Button, Container, Form, Image, Table } from 'react-bootstrap'
import CustomTable from '../components/CustomTable'
import { useDropzone } from 'react-dropzone'

const AddQuestions = () => {


	const onDrop = useCallback(acceptedFiles => {
		
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	return (
		<>
			<main>
				<Container fluid>
					<div className="row justify-content-center">
						<div className="col-lg-4">
							<div className="card shadow-lg border-0 rounded-lg mt-5">
								<div className="card-header"><h3 className="text-center font-weight-light my-4">Add Questions</h3></div>
								<div className="card-body">
									<Form>
										<div className="d-flex form-floating mb-3">
											<Form.Control as={'textarea'} placeholder="Your Question" />
											<Form.Label>
												Question
											</Form.Label>
											<div className='mx-1 p-2' {...getRootProps()}>
												<input {...getInputProps()} />
												{
													isDragActive ?
														<div className="card">Drag and Drop</div> :
														<div className="card">Drag and Drop</div>
												}
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-6">
												<div className="form-floating mb-3 mb-md-0">
													<Form.Control as={'textarea'} placeholder="Option 1" />
													<Form.Label>Option 1</Form.Label>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-floating mb-3 mb-md-0">
													<Form.Control as={'textarea'} placeholder="Option 2" />
													<Form.Label>Option 2</Form.Label>
												</div>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-md-6">
												<div className="form-floating mb-3 mb-md-0">
													<Form.Control as={'textarea'} placeholder="Option 3" />
													<Form.Label>Option 3</Form.Label>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-floating mb-3 mb-md-0">
													<Form.Control as={'textarea'} placeholder="Option 4" />
													<Form.Label>Option 4</Form.Label>
												</div>
											</div>
										</div>
										<div className="mt-4 mb-0">
											<div className="d-grid">
												<Form.Select aria-label="Default select example">
													<option>Choose the Correct Option</option>
													<option value="1">Option 1</option>
													<option value="2">Option 2</option>
													<option value="3">Option 3</option>
													<option value="4">Option 4</option>
												</Form.Select>
											</div>
										</div>
										<div className="mt-4 mb-0">
											<div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Add Question</a></div>
										</div>
									</Form>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="card shadow-lg border-0 rounded-lg mt-5">
								{/* <CustomTable
								TableTitle={TableTitle}
								TableData={tables}
								tableHooks={tableHooks}
								COLUMN_DATA={QUIZZES}
							/> */}
							</div>
						</div>
					</div>
				</Container>
			</main>
		</>
	)
}

export default AddQuestions