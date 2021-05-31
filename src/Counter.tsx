import style from './App.module.css';
import React from 'react';

export type CounterType = {
    counter: number
    maxValue: number
}

export function Counter(props: CounterType) {

    return (
        <div className={style.wrapperCount}>
            <span className={props.counter === props.maxValue ? style.countStop : style.count}>
                {props.counter}
            </span>
        </div>
    )
}