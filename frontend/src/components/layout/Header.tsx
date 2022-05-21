import React from 'react';
import {Btn} from "../common/Btn";

import "./Header.css";

export const Header = () => {
    return <header>
        <h1>
            <strong>Ogłoszenia</strong>
        </h1>
        <Btn text="Dodaj ogłoszenie" />
        <div className="search">
            <input type="text"/>
            <button>Szukaj</button>
        </div>
    </header>
}