import style from '../App.module.css';
import React from 'react';

export type SettingsType = {

}

export function Settings() {

    return (
        <div className={style.wrapperSettings}>
            <div className={style.settings}>
                <div className={style.valueSet}>
                    Max value:
                </div>
                <input type="number" className={style.inputSet}/>
            </div>
            <div className={style.settings}>
                <div className={style.valueSet}>
                    Start value:
                </div>
                <input type="number" className={style.inputSet}/>
            </div>
        </div>
    )
}