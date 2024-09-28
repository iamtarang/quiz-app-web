/* eslint-disable react/prop-types */
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();
	
	const hasAccess = allowedRoles.includes(auth?.role);


	return (
		hasAccess
			? <Outlet />
			: auth?.role
				? <Navigate to="/dashboard" state={{ from: location }} replace />
				: <Navigate to="/login" state={{ from: location }} replace />
	);
}

export default RequireAuth;