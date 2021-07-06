import React from 'react';
import style from './App.module.css'
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType, store} from './bll/store';
import {
    changeCounter,
    changeMaxValue,
    changeStartValue,
    CounterReducerType,
    setCounterValue, switchCounter
} from './bll/counter-reducer';
import {Dispatch} from 'redux';

export function App() {
    // const [maxValue, setMaxValue] = useState(1)
    // const [startValue, setStartValue] = useState(0)
    // const [currentValue, setCurrentValue] = useState(startValue)
    // const [switchCounter, setSwitchCounter] = useState(false)
    const {
        maxValue,
        startValue,
        currentValue
    } = useSelector((state: AppStateType) => state.counter)

    const dispatch = useDispatch<Dispatch<CounterReducerType>>()

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
    const switchCounterDisplay = (isSwitch: boolean) => {
        dispatch(switchCounter(isSwitch))
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
    const switchDisplay = store.getState().counter.isSwitch

    return (
        <div className={style.wrapperApp}>
            {!switchDisplay && <Counter
                setCounterValue={setCounterValueHandler}
                startValue={startValue}
                maxValue={maxValue}
                changeCounter={changeCounterHandler}
                count={currentValue}
                switchCounterDisplay={switchCounterDisplay}
            />}
            {switchDisplay &&
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

