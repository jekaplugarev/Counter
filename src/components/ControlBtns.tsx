import style from '../App.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

export type ControlBtnType = {
    changeCounter: (counter: number) => void
    setCounterValue: () => void
    count: number
    maxValue: number
    startValue: number
}

// button в одну компоненту

export function ControlBtns(props: ControlBtnType) {
    const changeCounter = () => props.changeCounter(props.count)
    const resetCounter = () => props.setCounterValue()

    return (
        <div className={style.wrapperBtn}>
            <button
                className={style.btn}
                onClick={changeCounter}
                disabled={props.count === props.maxValue}>Inc
            </button>
            <button
                className={style.btn}
                onClick={resetCounter}
                disabled={props.count === props.startValue}>Reset
            </button>
            <button className={style.btn}>
                <NavLink to="/set" className={style.link}>
                    Set
                </NavLink>
            </button>
        </div>
    )
}