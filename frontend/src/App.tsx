import React from 'react';
import './App.css';
import {TestInterface} from 'types';


export const App = () => {
    const foobar: TestInterface = {
        x: 123,
    }
    return (
        <div className="App">
            <h1>Witam</h1>
        </div>
    );
}

