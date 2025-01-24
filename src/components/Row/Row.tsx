import React, { FC } from "react";
import s from "./RowS.module.css";

type User = {
	full_name: string;
	department: string;
	country: string;
	status: string;
};

const Row = ({ user }: { user: User }) => {
	return (
		<div className={s.title_for_users}>
			<span className={s.item__full_name}>{user.full_name}</span>
			<span className={s.item__department}>{user.department}</span>
			<span className={s.item__country}>{user.country}</span>
			<span className={s.item__status}>{user.status}</span>
			<span className={s.item__button}></span>
		</div>
	);
};

export default Row;
