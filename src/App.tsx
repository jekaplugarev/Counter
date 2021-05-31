import React, {useState} from 'react';
import './App.css';
import style from './App.module.css'
import {Counter} from './Counter';
import {Btn} from './Btn';

export function App() {
    const maxValue: number = 5
    const [counter, setCounter] = useState<number>(0)

    function changeCounter(counter: number) {
        if (counter < maxValue) {
            setCounter(++counter)
        }
    }

    function resetCounter () {
        setCounter(0)
    }

    return (
        <div className={style.container}>
            <Counter
                counter={counter}
                maxValue={maxValue}
            />
            <Btn
                changeCounter={changeCounter}
                resetCounter={resetCounter}
                counter={counter}
                maxValue={maxValue}
            />
        </div>
    )
}

export default App;
