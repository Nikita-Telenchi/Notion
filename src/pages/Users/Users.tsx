import React, { useState } from "react";
import s from "./UsersS.module.css";
import { useDispatch, useSelector } from "react-redux";
import RowHead from "../../components/RowHead/RowHead";
import { RootState } from "../../app/store";
import Row from "../../components/Row/Row";

const Users = () => {
	type User = {
		full_name: string;
		department: string;
		country: string;
		status: string;
	};

	const users: User[] = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch();

	return (
		<main className={s.body}>
			<article className={s.account_settings}>
				<h1 className={s.main_title}>Users</h1>
				<section className={s.filter_heading}>
					<div className={s.title__filter_heading}>
						Please add at least 3 departmetns to be able to proceed next steps.
					</div>
					<section className={s.filters__filter_heading}></section>
				</section>
				<section className={s.users}>
					<RowHead />
					{users.map((user) => (
                        <Row user={user}/>
					))} 
				</section>
			</article>
		</main>
	);
};

export default Users;
