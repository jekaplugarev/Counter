import React from 'react';
import '../App.css';
import {Settings} from './Settings';
import style from '../App.module.css';
import {Button} from './Button';

type CounterSettingType = {
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    setCounterValue: () => void
    switchCounterDisplay: (value: boolean) => void
}

export function CounterSetting(props: CounterSettingType) {
    const onClickHandler = () => {
        props.setCounterValue()
        props.switchCounterDisplay(false)
    }

    return (
        <div className={style.containerSettings}>
            <Settings
                maxValue={props.maxValue}
                startValue={props.startValue}
                changeMaxValue={props.changeMaxValue}
                changeStartValue={props.changeStartValue}
            />
            <Button
                onClick={onClickHandler}
                disabled={props.maxValue <= props.startValue}
                btnName={'Set'}/>
        </div>
    )
}