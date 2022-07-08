import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeTextAction, loadData } from './redux/action/action';

export function Fns() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.textReducer.data.text);
    const user = useSelector(state => state.textReducer.data.saveData)
    // console.log(user);
    // console.log(text);

    useEffect(() => {
        dispatch(loadData())
    }, [])

    const [inpVal, setInpVal] = useState('')
    const dipetcher = () => {
        dispatch(changeTextAction(inpVal))
    }

    return (
        <div>
            <input type="text" onChange={(evt) => {
                setInpVal(evt.target.value)
            }} />
            <button onClick={dipetcher}>click me</button>
            <h1>{text}</h1>
            {
                user.map((el, ind) => {
                    console.log(el);
                    <h4 key={ind}>{el}</h4>
                })
            }
        </div>
    )

}