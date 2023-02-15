import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../configs";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [infoUser, setInfoUser] = useState();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(info => {
			if (info) {
				const { displayName, email, photoURL } = info;
				setInfoUser({ displayName, email, photoURL });
				console.log(info);
				navigate("/");
				setLoading(false);
				return;
			}
			navigate("/login");
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, [navigate]);
	// console.log(loading);
	// console.log(infoUser);
	return (
		<AuthContext.Provider value={{ infoUser }}>
			{loading ? <Loading /> : children}
		</AuthContext.Provider>
	);
};
export const UserAuth = () => useContext(AuthContext);
