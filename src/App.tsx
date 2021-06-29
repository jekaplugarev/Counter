import React, {useEffect, useState} from 'react';
import style from './App.module.css'
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {changeCounter, changeMaxValue, changeStartValue, setCounterValue} from './bll/counter-reducer';


export function App() {
    // const [maxValue, setMaxValue] = useState(1)
    // const [startValue, setStartValue] = useState(0)
    // const [currentValue, setCurrentValue] = useState(startValue)
    const [switchCounter, setSwitchCounter] = useState(false)

    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const currentValue = useSelector<AppStateType, number>(state => state.counter.currentValue)

    const dispatch = useDispatch()

    const changeCounterHandler = () => {
        dispatch(changeCounter())
    }
    const setCounterValueHandler = () => {
        dispatch(setCounterValue())
    }
    const changeMaxValueHandler = (value: number) => {
        dispatch(changeMaxValue(value))
    }
    const changeStartValueHandler = (value: number) => {
        dispatch(changeStartValue(value))
    }
    const switchCounterDisplay = (value: boolean) => {
        setSwitchCounter(value)
    }
    // useEffect(() => {
    //     const counterAsString = localStorage.getItem('counter')
    //
    //     if (counterAsString ) {
    //         const parseCounter = JSON.parse(counterAsString)
    //         setMaxValue(JSON.parse(parseCounter.maxValue))
    //         setStartValue(JSON.parse(parseCounter.startValue))
    //         setCurrentValue(JSON.parse(parseCounter.currentValue))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     const counter = {
    //         startValue: startValue,
    //         maxValue: maxValue,
    //         currentValue: currentValue
    //     }
    //     localStorage.setItem('counter', JSON.stringify(counter))
    // }, [startValue, maxValue, currentValue])


    // function changeCounter(counter: number) {
    //     if (counter < maxValue) {
    //         setCurrentValue(++counter)
    //     }
    // }
    // function setCounterValue() {
    //     setCurrentValue(startValue)
    // }
    // function changeMaxValue(value: number) {
    //     setMaxValue(value)
    // }
    // function changeStartValue(value: number) {
    //     setStartValue(value)
    // }

    return (
        <div className={style.wrapperApp}>
            {!switchCounter && <Counter
                setCounterValue={setCounterValueHandler}
                startValue={startValue}
                maxValue={maxValue}
                changeCounter={changeCounterHandler}
                count={currentValue}
                switchCounterDisplay={switchCounterDisplay}
            />}
            {switchCounter &&
            <CounterSetting
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValueHandler}
                changeStartValue={changeStartValueHandler}
                setCounterValue={setCounterValueHandler}
                switchCounterDisplay={switchCounterDisplay}
            />}
        </div>
    )
}

