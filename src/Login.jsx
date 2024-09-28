/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { config, connection } from "./Auth";
import useAuth from "./hooks/useAuth";

function Login() {


	const [email, setEmail] = useState("");
	const [password, setPwd] = useState("");

	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await connection.post('/login', {
				email,
				password,
			});

			if (!response?.data?.token) {
				toast.error(response?.data?.message, {
					position: "top-center",
					autoClose: 1200,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				})
			} else {
				sessionStorage.setItem("token", response?.data?.token)
				const accessToken = response?.data?.token

				if (response?.data?.users[0].id != null) {
					const id = response?.data?.users[0].id
					const name = response?.data?.users[0].name
					const role = response?.data?.users[0].roles
					setAuth({ id, name, role, accessToken })
				}

				toast.success("Login Successful", {
					position: "top-center",
					autoClose: 1200,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				setEmail("");
				setPwd("");

				navigate(from, { replace: true });
			}
		} catch (error) {
			console.log(error)
			toast.error(error.message, {
				position: "top-center",
				autoClose: 1200,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			})
		}
	};

	return (
		<>
			<div id="layoutAuthentication">
				<div id="layoutAuthentication_content">
					<main>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-5">
									<div className="card shadow-lg border-0 rounded-lg mt-5">
										<div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
										<div className="card-body">
											<Form onSubmit={handleSubmit}>
												<div className="form-floating mb-3">
													<Form.Control
														className="form-control"
														id="inputEmail"
														type="email"
														placeholder="name@example.com"
														onChange={(e) => setEmail(e.target.value)}
														value={email} />
													<Form.Label htmlFor="inputEmail">Email address</Form.Label>
												</div>
												<div className="form-floating mb-3">
													<Form.Control
														className="form-control"
														id="inputPassword"
														type="password"
														placeholder="Password"
														onChange={(e) => setPwd(e.target.value)}
														value={password} />
													<Form.Label htmlFor="inputPassword">Password</Form.Label>
												</div>
												<div className="d-flex align-items-center justify-content-between mt-4 mb-0">
													<Button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Login</Button>
												</div>
											</Form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
				<div id="layoutAuthentication_footer">
					<footer className="py-4 bg-light mt-auto">
						<div className="container-fluid px-4">
							<div className="d-flex align-items-center justify-content-between small">
								<div className="text-muted">Copyright &copy; Quiz App</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}

export default Login