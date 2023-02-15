import classNames from "classnames/bind";
import styles from "../styles/coffee.scss";
const cx = classNames.bind(styles);

export const Loading = () => {
	return (
		<div
			className={cx(
				"w-full h-[100vh] flex justify-center bg-[#8d99ae] items-center"
			)}>
			<div className={cx("coffee")}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
