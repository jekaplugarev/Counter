import React from 'react';
import '../App.css';
import {Settings} from './Settings';
import {SetBtn} from './SetBtn';
import style from '../App.module.css';


export function CounterSetting() {

    return (
        <div className={style.containerSettings}>
            <Settings/>
            <SetBtn/>
        </div>
    )
}