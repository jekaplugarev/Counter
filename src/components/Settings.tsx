import style from '../App.module.css';
import React, {ChangeEvent} from 'react';

export type SettingsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
}

export function Settings(props: SettingsType) {
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let valueAsNumber = event.currentTarget.valueAsNumber;
        if (valueAsNumber > 0) {
            props.changeMaxValue(valueAsNumber)
        }
    }
    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        let valueAsNumber = event.currentTarget.valueAsNumber;
        if (valueAsNumber >= 0) {
            props.changeStartValue(valueAsNumber)
        }
    }

    return (
        <div className={style.wrapperSettings}>
            <div className={style.settings}>
                <div className={style.valueSet}>
                    Max value:
                </div>
                <input
                    type="number"
                    className={props.maxValue > props.startValue ? style.inputSet : style.errorInput}
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
                    className={props.maxValue > props.startValue ? style.inputSet : style.errorInput}
                    value={props.startValue}
                    onChange={onChangeStartValue}
                />
            </div>
        </div>
    )
}