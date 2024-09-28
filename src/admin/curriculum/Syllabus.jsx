/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Course from './Course';
import Semester from './Semester';
import Subject from './Subject';

const Syllabus = () => {
	return (
		<>
			<main>
				<div className="container-fluid mt-5">
					<Card>
						<Tabs>
							<Card.Body>
								<TabList>
									<Tab>Course</Tab>
									<Tab>Semester</Tab>
									<Tab>Subject</Tab>
								</TabList>
					
								<TabPanel>
									<Row>
										<Course />
									</Row>
								</TabPanel>

								<TabPanel>
									<Row>
										<Semester />
									</Row>
								</TabPanel>

								<TabPanel>
									<Row>
										<Subject />
									</Row>
								</TabPanel>
							</Card.Body>
						</Tabs>
					</Card>
				</div>
			</main>
		</>
	)
}

export default Syllabus