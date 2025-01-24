// @ts-nocheck

import React, { useState } from "react";
import s from "./FilterS.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { User } from "../../features/Users/usersSilce";

// import ReactSlider from "react-slider";

export default function Filter({
	title,
	list,
}: {
	title: string;
	list: User[];
}) {
	const [visbl, setVisbl] = useState(true);
	const [view, setView] = useState(false);

	const onClickArrow = () => {
		setVisbl(!visbl);
	};
	const onClickViewer = () => {
		setView(!view);
	};

	const filterStyle = {
		paddingBottom:
			list.length > 4 ? "10.5px" : list.length === 4 ? "2.25px" : "21px",
	};

	const styleBody = {
		display: "flex",
		flexDirection: "column",
		height: list.length >= 4 ? "100px" : "wrap",
		overflow: "scroll",
		overflowX: "hidden",
	};
	const styleAll = {
        display: visbl ? "flex" : "none",
		flexDirection: "column",
	};

	const styleArrow = {
		transform: visbl ? "rotate(0deg)" : "rotate(90deg)",
		transition: "all .05s linear",
	};

	const wrSliderStyle = {
		display: visbl ? "block" : "none",
	};

	return (
		<div className={s.filter} style={filterStyle}>
			<div className={s.title}>
				{title}{" "}
				<MdArrowForwardIos
					onClick={onClickArrow}
					size={"0.65rem"}
					color={"#0c0b3bb3"}
					style={styleArrow}
				/>
			</div>

			<div className={s.body} style={styleAll}>
				{list.map((filter) => (
					<>
						<label className={s.item_of_list} key={filter.id}>
							<input
                                className={s.input}
								type="checkbox"
								// checked={filter.checkbox}
								// onChange={() => alert()}
							/>
							<span>{filter.department}</span>
						</label>
					</>
				))}
			</div>
		</div>
	);
}
