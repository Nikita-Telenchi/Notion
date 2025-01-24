import React from 'react'
import s from './RowHeadS.module.css'

const RowHead = () => {
  return (
    <div className={s.title_for_users}>
			<span className={s.item__full_name}>
				<b>Full Name</b>
			</span>
			<span className={s.item__department}>
				<b>Department</b>
			</span>
			<span className={s.item__country}>
				<b>Country</b>
			</span>
			<span className={s.item__status}>
				<b>Status</b>
			</span>
			<span className={s.item__button}></span>
	</div>
  )
}

export default RowHead