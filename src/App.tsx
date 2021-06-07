import React from 'react';
import './App.css';
import style from './App.module.css'
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {Switch, Route, Redirect} from 'react-router-dom';

export function App() {

    return (
        <Switch>
            <div className={style.wrapperApp}>
                <Route path="/" exact render={() => <Redirect to="/main"/>}/>
                <Route path="/set" render={() => <CounterSetting/>}/>
                <Route path="/main" render={() => <Counter/>}/>
            </div>
        </Switch>
    )
}

