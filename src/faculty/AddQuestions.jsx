/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';

const AddQuestions = () => {
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
											<Form.Label htmlFor="inputTitle">Add Questions</Form.Label>
										</div>
										<Row>
											<Col>
												<Form.Control id="option1" type='text' placeholder="Option 1" />
												<Form.Control id="option3" className='mt-2' type='text' placeholder="Option 3" />

											</Col>
											<Col>
												<Form.Control id="option2" type='text' placeholder="Option 2" />
												<Form.Control id="option4" className='mt-2' type='text' placeholder="Option 4" />

											</Col>
										</Row>

										<div className="mt-4 mb-0">
											<div className="d-grid">
												<Button className="btn btn-primary btn-block"
												// onClick={}
												>
													Add Question
												</Button>
											</div>
										</div>
									</Form>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="card shadow-lg border-0 rounded-lg mt-5">

							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default AddQuestions;
