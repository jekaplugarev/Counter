import React, {useEffect, useState} from 'react';
import style from './App.module.css'
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {Switch, Route, Redirect} from 'react-router-dom';



export function App() {
    const [startValue, setStartValue] = useState(1)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState(startValue)


    // поправить нейминг
    // useState для отображения приложения по флагу


    // useEffect( ()=> {
    //     const counter = {
    //         startValue: startValue,
    //         maxValue: maxValue
    //     }
    //     localStorage.setItem('test', JSON.stringify(counter))
    // },[] )
    // Сделать один useEffect


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
        let value = localStorage.getItem('countValue')
        if (value) {
            let countValue = JSON.parse(value)
            setCount(countValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    function changeCounter(counter: number) {
        if (counter < maxValue) {
            setCount(++counter)
        }
    }

    function setCounterValue() {

        // const test = localStorage.getItem('test')
        // debugger
        setCount(startValue)
    }

    function changeMaxValue(value: number) {
        setMaxValue(value)
    }

    function changeStartValue(value: number) {
        setStartValue(value)
    }

    return (
        <div className={style.wrapperApp}>

            {/*{ true ? <div>1</div> : <div>2</div>  убрать Роутеры сделать по флагу}*/}


            <Switch>
                <Route path="/main" exact render={() => <Counter
                    setCounterValue={setCounterValue}
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
                    setCounterValue={setCounterValue}
                />}/>
                <Redirect to="/set"/>
            </Switch>
        </div>
    )
}

