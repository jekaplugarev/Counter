import style from '../App.module.css';
import React, {ChangeEvent} from 'react';
import {NavLink} from 'react-router-dom';

export type SetBtnType = {
    changeStartValue: (value: number) => void

}

export function SetBtn() {
    const onClickSetStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+event.currentTarget.value)
    }

    return (
        <div className={style.wrapperSetBtn}>
            <button
                className={style.btn}
                onClick={onClickSetStartValue}
            >
                <NavLink to="/main" className={style.link}>
                    Set
                </NavLink>
            </button>
        </div>
    )
}