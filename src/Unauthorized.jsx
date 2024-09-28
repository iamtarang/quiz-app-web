/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
	return (
		<>
			<main>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="text-center mt-4">
								<h1 className="display-1">401</h1>
								<p className="lead">Unauthorized</p>
								<p>Access to this resource is denied.</p>
								<Link to={'/dashboard'}>
									<FaArrowLeft className='me-1 mb-0' />
									Return to dashboard
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Unauthorized