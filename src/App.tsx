import React, {useEffect, useState} from 'react';
import style from './App.module.css'
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {Switch, Route, Redirect} from 'react-router-dom';

export function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [count, setCount] = useState(startValue)

    function changeCounter(counter: number) {
        if (counter < maxValue) {
            setCount(++counter)
        }
    }

    function resetCounter() {
        setCount(startValue)
    }

    function changeMaxValue(value: number) {
        setMaxValue(value)
    }

    function changeStartValue(value: number) {
        setStartValue(value)
    }

    useEffect(() => {
        let value = localStorage.getItem('maxValue')
        if (value) {
            let maxValue = JSON.parse(value)
            setMaxValue(maxValue)
        }
    }, [])

    useEffect(() => {
        let value = localStorage.getItem('startValue')
        if (value) {
            let startValue = JSON.parse(value)
            setStartValue(startValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    return (
        <div className={style.wrapperApp}>
            <Switch>
                <Route path="/" exact render={() => <Counter
                    resetCounter={resetCounter}
                    startValue={startValue}
                    maxValue={maxValue}
                    changeCounter={changeCounter}
                    count={count}
                />}/>
                <Route path="/set" render={() => <CounterSetting
                    maxValue={maxValue}
                    startValue={startValue}
                    changeMaxValue={changeMaxValue}
                    changeStartValue={changeStartValue}
                />}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

