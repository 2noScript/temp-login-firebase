import classNames from "classnames/bind";
// import styles from './.module.scss'
import { Route, Routes } from "react-router-dom";
import { InfoUser, Login } from "./pages";
import { AuthContextProvider } from "./context/authContext";
import { Protected } from "./components";
const cx = classNames.bind();

function App() {
	return (
		<div className={cx()}>
			<AuthContextProvider>
				<Routes>
					<Route
						path="/"
						element={
							<Protected>
								<InfoUser />
							</Protected>
						}
					/>
					<Route path="/login" element={<Login />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
