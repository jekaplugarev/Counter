import style from '../App.module.css';
import React from 'react';
import {Button} from './Button';

export type ControlBtnType = {
    changeCounter: (counter: number) => void
    setCounterValue: () => void
    switchCounterDisplay: (value: boolean) => void
    count: number
    maxValue: number
    startValue: number
}

export function ControlBtns(props: ControlBtnType) {
    const changeCounter = () => props.changeCounter(props.count)
    const resetCounter = () => props.setCounterValue()
    const switchCounterDisplay = () => props.switchCounterDisplay(true)

    return (
        <div className={style.wrapperBtn}>
            <Button
                onClick={changeCounter}
                disabled={props.count === props.maxValue}
                btnName={'Inc'}
            />
            <Button
                onClick={resetCounter}
                disabled={props.count === props.startValue}
                btnName={'Reset'}
            />
            <Button
                onClick={switchCounterDisplay}
                btnName={'Set'}
            />
        </div>
    )
}

