import { auth } from "../configs";
import { signOut } from "firebase/auth";
import classNames from "classnames/bind";
import { Button } from "../components";
import { BiLogOut } from "react-icons/bi";
import { UserAuth } from "../context/authContext";
const cx = classNames.bind();
export const InfoUser = () => {
	const { infoUser } = UserAuth();
	const handleLogout = e => signOut(auth);
	return (
		<div
			className={cx(
				"w-full h-[100vh] flex flex-col items-center justify-center bg-[#8d99ae] text-[#3a3f47]"
			)}>
			<Button
				bgColor=""
				onClick={handleLogout}
				name="logout"
				className={cx("w-[140rem] text-[#3a3f47]")}
				icon={<BiLogOut />}
			/>
			<div
				className={cx(
					"bg-[#98c1d9] rounded-[12rem] overflow-hidden px-[20rem] py-[32rem] mt-[8rem]"
				)}>
				<div className={cx("rounded-full overflow-hidden w-[132rem] h-[132rem]")}>
					<img
						src={infoUser?.photoURL}
						alt={infoUser?.displayName}
						className={cx("w-full h-full")}
					/>
				</div>
				<h4 className={cx("mt-[12rem] font-semibold ")}>
					{infoUser?.displayName}
				</h4>
			</div>
		</div>
	);
};
