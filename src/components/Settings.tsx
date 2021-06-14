import style from '../App.module.css';
import React, { ChangeEvent } from 'react';

export type SettingsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
}

export function Settings(props: SettingsType) {
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+event.currentTarget.value) /// возвращало строку, надо число
    }

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeStartValue(+event.currentTarget.value) /// возвращало строку, надо число
    }

    return (
        <div className={style.wrapperSettings}>
            <div className={style.settings}>
                <div className={style.valueSet}>
                    Max value:
                </div>
                <input
                    type="number"
                    className={style.inputSet}
                    value={props.maxValue}
                    onChange={onChangeMaxValue}
                />
            </div>
            <div className={style.settings}>
                <div className={style.valueSet}>
                    Start value:
                </div>
                <input
                    type="number"
                    className={style.inputSet}
                    value={props.startValue}
                    onChange={onChangeStartValue}
                />
            </div>
        </div>
    )
}