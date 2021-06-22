import React from 'react';
import {CounterDisplay} from './CounterDisplay';
import {ControlBtns} from './ControlBtns';
import style from '../App.module.css';

type CounterType = {
    maxValue: number
    startValue: number
    changeCounter: (counter: number) => void
    setCounterValue: () => void
    count: number
    switchCounterDisplay: (value: boolean) => void
}

export function Counter(props: CounterType) {

    return (
        <div className={style.containerCounter}>
            <CounterDisplay
                count={props.count}
                maxValue={props.maxValue}
            />
            <ControlBtns
                changeCounter={props.changeCounter}
                setCounterValue={props.setCounterValue}
                count={props.count}
                maxValue={props.maxValue}
                startValue={props.startValue}
                switchCounterDisplay={props.switchCounterDisplay}
            />
        </div>
    )
}
