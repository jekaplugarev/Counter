import React, {useState} from 'react';
import {CounterDisplay} from './CounterDisplay';
import {ControlBtn} from './ControlBtn';
import style from '../App.module.css';

export function Counter() {
    const maxValue: number = 5
    const [counter, setCounter] = useState<number>(0)

    function changeCounter(counter: number) {
        if (counter < maxValue) {
            setCounter(++counter)
        }
    }

    function resetCounter() {
        setCounter(0)
    }

    return (
        <div className={style.containerCounter}>
            <CounterDisplay
                counter={counter}
                maxValue={maxValue}
            />
            <ControlBtn
                changeCounter={changeCounter}
                resetCounter={resetCounter}
                counter={counter}
                maxValue={maxValue}
            />
        </div>
    )
}
