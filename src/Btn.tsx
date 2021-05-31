import style from './App.module.css';
import React from 'react';

export type BtnType = {
    changeCounter: (counter: number) => void
    resetCounter: () => void
    counter: number
    maxValue: number
}

export function Btn(props: BtnType) {
    const changeCounter = () => props.changeCounter(props.counter)
    const resetCounter = () => props.resetCounter()

    return (
        <div className={style.wrapperBtn}>
            <button
                className={style.btn}
                onClick={changeCounter}
                disabled={props.counter === props.maxValue}>inc</button>
            <button
                className={style.btn}
                disabled={props.counter === 0}
                onClick={resetCounter}>reset</button>
        </div>
    )
}