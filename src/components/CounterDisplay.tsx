import style from '../App.module.css';
import React from 'react';

export type CounterType = {
    counter: number
    maxValue: number
}

export function CounterDisplay(props: CounterType) {

    return (
        <div className={style.wrapperCounter}>
            <span className={props.counter === props.maxValue ? style.countStop : style.count}>
                {props.counter}
            </span>
        </div>
    )
}