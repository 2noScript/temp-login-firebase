import classNames from "classnames/bind";
// import styles from './.module.scss'
const cx = classNames.bind();

export const Button = props => {
	const { icon, name, onClick, className, bgColor } = props;
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: bgColor || "#cccccc" }}
			className={cx(
				"flex items-center rounded-[10rem] px-[8rem] py-[4rem] text-[#ffffff] w-full",
				className
			)}>
			<i className={cx("text-[32rem]")}>{icon}</i>
			<h4 className={cx("capitalize text-[20rem] ml-[8rem]")}>{name}</h4>
		</button>
	);
};
