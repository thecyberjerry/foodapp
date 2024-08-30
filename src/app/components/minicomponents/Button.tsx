import React from 'react'
import { ButtonType } from '../../../../source/types'
type MyBtn =
    {
        btn: ButtonType
    }
export default function Button({ btn }: MyBtn) {
    return (
        <div className='btn'>
            <button className={`btn--${btn && btn?.bgcolor ? btn.bgcolor : "red"} btn--text${btn && btn?.textcolor ? btn?.textcolor : "white"}`} > {btn && btn.title}</button>
        </div >
    )
}
