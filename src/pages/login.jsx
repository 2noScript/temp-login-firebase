import classNames from "classnames/bind";
// import styles from './.module.scss'

import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

import { Button } from "../components";
import {
	GoogleAuthProvider,
	signInWithRedirect,
	FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../configs";
const cx = classNames.bind();

export const Login = props => {
	const handleGoogleLogin = async e =>
		await signInWithRedirect(auth, new GoogleAuthProvider());
	const handleFacebookLogin = async e =>
		await signInWithRedirect(auth, new FacebookAuthProvider());

	const LOGIN_FIREBASE = [
		{
			name: "google",
			icon: <AiOutlineGoogle />,
			bgColor: "#DB4437",
			handleClick: handleGoogleLogin,
		},
		{
			name: "facebook",
			icon: <CgFacebook />,
			bgColor: "#3B5998",
			handleClick: handleFacebookLogin,
		},
		{
			name: "github",
			icon: <AiFillGithub />,
			bgColor: "#1E1F26",
			handleClick: null,
		},
	];
	return (
		<div
			className={cx(
				"w-full h-[100vh] flex items-center justify-center bg-[#8d99ae]"
			)}>
			<ul
				className={cx(
					" bg-[#cccccc] w-[300rem] h-[360rem] flex flex-col justify-center items-center rounded-[16rem] pb-[24rem]"
				)}>
				{LOGIN_FIREBASE.map(item => {
					const { name, icon, bgColor, handleClick } = item;
					return (
						<li key={name} className={cx("w-[200rem] mt-[24rem]")}>
							<Button
								icon={icon}
								name={name}
								bgColor={bgColor}
								onClick={handleClick}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
