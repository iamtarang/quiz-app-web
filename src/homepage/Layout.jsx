/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { Children } from 'react'
import { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {

	const [sidebarClassName, setSidebarClassName] = useState('');
	const [currentLocation, setCurrentLocation] = useState("")


	useEffect(() => {
		const handleSidebarToggle = () => {
			setSidebarClassName(prevClassName =>
				prevClassName ? '' : 'sb-sidenav-toggled'
			);
		};

		const sidebarToggle = document.body.querySelector('#sidebarToggle');
		if (sidebarToggle) {
			sidebarToggle.addEventListener('click', handleSidebarToggle);
		}

		return () => {
			if (sidebarToggle) {
				sidebarToggle.removeEventListener('click', handleSidebarToggle);
			}
		};
	}, []);

	useEffect(() => {
		document.body.className = sidebarClassName;
		localStorage.setItem('sb|sidebar-toggle', sidebarClassName === 'sb-sidenav-toggled' ? 'true' : 'false');
	}, [sidebarClassName]);


	return (
		<>
			<div className="sb-nav-toggled">
				<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
					{/* <!-- Layout Brand--> */}
					<a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
					{/* <!-- Sidebar Toggle--> */}
					<button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
						<i className="fas fa-bars"></i>
					</button>
					<div className='d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0'></div>
					{/* <!-- Layout--> */}
					<Nav className="ms-auto ms-md-0 me-3 me-lg-4">
						<NavDropdown title={<i className="fas fa-user fa-fw"></i>} id="navbarDropdown">
							<NavDropdown.Item href="#!">Settings</NavDropdown.Item>
							<NavDropdown.Item href="#!">Activity Log</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#!">Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</nav>
				<div id="layoutSidenav">
					<div id="layoutSidenav_nav">
						<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
							<div className="sb-sidenav-menu">
								<div className="nav">
									{/* <!-- Layout Search--> */}
									<form className="nav-link">
										<div className="input-group">
											<input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
											<button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
										</div>
									</form>
									<div className="sb-sidenav-menu-heading">Core</div>
									<a className="nav-link" href="index.html">
										<div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
										Dashboard
									</a>
									<div className="sb-sidenav-menu-heading">Interface</div>
									<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
										<div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
										Layouts
										<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
									</a>
									<div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
										<nav className="sb-sidenav-menu-nested nav">
											<a className="nav-link" href="layout-static.html">Static Navigation</a>
											<a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
										</nav>
									</div>
									<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
										<div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
										Pages
										<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
									</a>
									<div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
										<nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
											<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
												Authentication
												<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
											</a>
											<div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
												<nav className="sb-sidenav-menu-nested nav">
													<a className="nav-link" href="login.html">Login</a>
													<a className="nav-link" href="register.html">Register</a>
													<a className="nav-link" href="password.html">Forgot Password</a>
												</nav>
											</div>
											<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
												Error
												<div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
											</a>
											<div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
												<nav className="sb-sidenav-menu-nested nav">
													<a className="nav-link" href="401.html">401 Page</a>
													<a className="nav-link" href="404.html">404 Page</a>
													<a className="nav-link" href="500.html">500 Page</a>
												</nav>
											</div>
										</nav>
									</div>
									<div className="sb-sidenav-menu-heading">Addons</div>
									<a className="nav-link" href="charts.html">
										<div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
										Charts
									</a>
									<a className="nav-link" href="tables.html">
										<div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
										Tables
									</a>
								</div>
							</div>
							<div className="sb-sidenav-footer">
								<div className="small">Logged in as:</div>
								Start Bootstrap
							</div>
						</nav>
					</div>
					<div id="layoutSidenav_content">
						<Outlet context={setCurrentLocation} />
						<footer className="py-4 bg-light mt-auto">
							<div className="container-fluid px-4">
								<div className="d-flex align-items-center justify-content-between small">
									<div className="text-muted">Copyright &copy; Your Website 2023</div>
									<div>
										<a href="#">Privacy Policy</a>
										&middot;
										<a href="#">Terms &amp; Conditions</a>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout