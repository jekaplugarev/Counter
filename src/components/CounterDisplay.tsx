import style from '../App.module.css';
import React from 'react';

export type CounterType = {
    count: number
    maxValue: number
}

export function CounterDisplay(props: CounterType) {

    return (
        <div className={style.wrapperCounter}>
            <span className={props.count === props.maxValue ? style.countStop : style.count}>
                {props.count}
            </span>
        </div>
    )
}