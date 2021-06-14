import React from 'react';
import '../App.css';
import {Settings} from './Settings';
import {SetBtn} from './SetBtn';
import style from '../App.module.css';

type CounterSettingType = {
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
}

export function CounterSetting(props: CounterSettingType) {

    return (
        <div className={style.containerSettings}>
            <Settings
                maxValue={props.maxValue}
                startValue={props.startValue}
                changeMaxValue={props.changeMaxValue}
                changeStartValue={props.changeStartValue}
            />
            <SetBtn/>
        </div>
    )
}