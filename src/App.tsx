import React, {useEffect, useState} from 'react';
import style from './App.module.css'
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';

export function App() {
    const [maxValue, setMaxValue] = useState(1)
    const [startValue, setStartValue] = useState(0)
    const [currentValue, setCurrentValue] = useState(startValue)
    const [switchCounter, setSwitchCounter] = useState(false)

    useEffect(() => {
        const counterAsString = localStorage.getItem('counter')

        if (counterAsString ) {
            const parseCounter = JSON.parse(counterAsString)
            setMaxValue(JSON.parse(parseCounter.maxValue))
            setStartValue(JSON.parse(parseCounter.startValue))
            setCurrentValue(JSON.parse(parseCounter.currentValue))
        }
    }, [])

    useEffect(() => {
        const counter = {
            startValue: startValue,
            maxValue: maxValue,
            currentValue: currentValue
        }
        localStorage.setItem('counter', JSON.stringify(counter))
    }, [startValue, maxValue, currentValue])


    function changeCounter(counter: number) {
        if (counter < maxValue) {
            setCurrentValue(++counter)
        }
    }
    function setCounterValue() {
        setCurrentValue(startValue)
    }
    function changeMaxValue(value: number) {
        setMaxValue(value)
    }
    function changeStartValue(value: number) {
        setStartValue(value)
    }
    function switchCounterDisplay(value: boolean) {
        setSwitchCounter(value)
    }

    return (
        <div className={style.wrapperApp}>
            {!switchCounter && <Counter
                setCounterValue={setCounterValue}
                startValue={startValue}
                maxValue={maxValue}
                changeCounter={changeCounter}
                count={currentValue}
                switchCounterDisplay={switchCounterDisplay}
            />}
            {switchCounter &&
            <CounterSetting
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                setCounterValue={setCounterValue}
                switchCounterDisplay={switchCounterDisplay}
            />}
        </div>
    )
}

