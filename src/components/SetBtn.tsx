import style from '../App.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

export type SetBtnType = {
    setCounterValue: () => void
    startValue: number
    maxValue: number
}

export function SetBtn(props: SetBtnType) {
    const resetCounter = () => props.setCounterValue()

    return (
        <div className={style.wrapperSetBtn}>
            <NavLink to="/main" className={style.link}>
                <button
                    className={style.btn}
                    onClick={resetCounter}
                    disabled={props.maxValue <= props.startValue}
                >
                    Set
                </button>
            </NavLink>
        </div>
    )
}