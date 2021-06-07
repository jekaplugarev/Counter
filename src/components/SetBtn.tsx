import style from '../App.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

export type SetBtnType = {}

export function SetBtn() {

    return (
        <div className={style.wrapperSetBtn}>
            <button className={style.btn}>
                <NavLink to="/main" className={style.link}>
                    Set
                </NavLink>
            </button>
        </div>
    )
}