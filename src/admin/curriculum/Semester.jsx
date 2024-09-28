/* eslint-disable no-unused-vars */
import React from 'react'
import { Form, Table } from 'react-bootstrap'

const Semester = () => {
	return (
		<>
			<div className="row justify-content-center">
				<div className="col-lg-5">
					<div className="card shadow-lg border-0 rounded-lg mt-2">
						<div className="card-header"><h3 className="text-center font-weight-light my-4">Add New Semester</h3></div>
						<div className="card-body">
							<Form>
								<div className="mb-4 mb-0">
									<div className="d-grid">
										<Form.Select aria-label="Default select example">
											<option>Choose the Course</option>
											<option value="1">Option 1</option>
											<option value="2">Option 2</option>
											<option value="3">Option 3</option>
											<option value="4">Option 4</option>
										</Form.Select>
									</div>
								</div>
								<div className="form-floating mb-3">
									<Form.Control type='text' placeholder="New Course" />
									<Form.Label>Add Semester</Form.Label>
								</div>
								<div className="mt-4 mb-0">
									<div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Add Semester</a></div>
								</div>
							</Form>
						</div>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="card shadow-lg border-0 rounded-lg mt-2">
						<div className="card-header"><h3 className="text-center font-weight-light my-4">Your Semesters</h3></div>
						<div className="card-body">
							<Table responsive>
								<thead>
									<tr>
										<th>#</th>
										{Array.from({ length: 5 }).map((_, index) => (
											<th key={index}>Table heading</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										{Array.from({ length: 5 }).map((_, index) => (
											<td key={index}>Table cell {index}</td>
										))}
									</tr>
									<tr>
										<td>2</td>
										{Array.from({ length: 5 }).map((_, index) => (
											<td key={index}>Table cell {index}</td>
										))}
									</tr>
									<tr>
										<td>3</td>
										{Array.from({ length: 5 }).map((_, index) => (
											<td key={index}>Table cell {index}</td>
										))}
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Semester