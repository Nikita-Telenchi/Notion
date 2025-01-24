import React, { FC } from "react";
import s from "./RowS.module.css";
import { User } from "../../features/Users/usersSilce";
import ImgTrash  from "./../../assets/trach.svg"

const Row = ({ user }: { user: User }) => {
	return (
		<div className={s.title_for_users}>
			<span className={s.item__full_name}>{user.full_name}</span>
			<span className={s.item__department}>{user.department}</span>
			<span className={s.item__country}>{user.country}</span>
			<span className={s.item__status}>{user.status}</span>
			<img className={s.img} onClick={() => alert("Hello "+ user.id)} src={ImgTrash} alt={"trach img"}/>
		</div>
	);
};

export default Row;
