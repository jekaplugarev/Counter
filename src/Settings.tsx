import style from './App.module.css';
import React from 'react';

export type SettingsType = {

}

export function Settings() {

    return (
        <div className={style.wrapperSettings}>
            <div className={style.inputSet}>
                <div className={style.value}>
                    Max value:
                </div>
                <input type="number" className={style.input}/>
            </div>
            <div className={style.inputSet}>
                <div className={style.value}>
                    Start value:
                </div>
                <input type="number" className={style.input}/>
            </div>
        </div>
    )
}