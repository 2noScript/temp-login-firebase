import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
export const Protected = ({ children }) => {
	const { infoUser } = UserAuth();
	if (!infoUser) return <Navigate to="/login" />;
	return children;
};
