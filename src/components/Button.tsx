import style from '../App.module.css';
import React from 'react';

export type ButtonType = {
    onClick?: () => void
    disabled?: boolean
    btnName: string
}

export function Button(props: ButtonType) {
    return (
        <div>
            <button
                className={style.btn}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.btnName}
            </button>
        </div>
    )
}