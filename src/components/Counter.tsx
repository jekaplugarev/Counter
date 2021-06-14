import React from 'react';
import {CounterDisplay} from './CounterDisplay';
import {ControlBtn} from './ControlBtn';
import style from '../App.module.css';

type CounterType = {
    maxValue: number
    startValue: number
    changeCounter: (counter: number) => void
    resetCounter: () => void
    count: number
}

export function Counter(props: CounterType) {

    return (
        <div className={style.containerCounter}>
            <CounterDisplay
                count={props.count}
                maxValue={props.maxValue}
            />
            <ControlBtn
                changeCounter={props.changeCounter}
                resetCounter={props.resetCounter}
                count={props.count}
                maxValue={props.maxValue}
                startValue={props.startValue}
            />
        </div>
    )
}
