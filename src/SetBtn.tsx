import style from './App.module.css';
import React from 'react';

export type SetBtnType = {}

export function SetBtn() {

    return (
        <div className={style.wrapperSetBtn}>
            <button className={style.setBtn}>
                Set
            </button>
        </div>
    )
}