import React, {SyntheticEvent, useContext, useState} from 'react';
import {Btn} from "../common/Btn";

import "./Header.css";
import {SearchContext} from "../../contexts/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const serSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (
        <header>
            <h1>
                <strong>Ogłoszenia</strong>
            </h1>
            <Btn text="Dodaj ogłoszenie" />
            <form className="search" onSubmit={serSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => {
                    setInputVal(e.target.value)
                }}/>    <Btn text="Szukaj"/>
            </form>
        </header>
    )
}