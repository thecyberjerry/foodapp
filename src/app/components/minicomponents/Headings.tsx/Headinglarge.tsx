import React from 'react'
import { Text } from '../../../../../source/types'
interface HeadinglargeType {
    headinglarge?: Text
}
export default function headinglarge({ headinglarge }: HeadinglargeType) {
    return (
        <div className={`heading--${headinglarge && headinglarge?.color ? headinglarge?.color : "black"}`}>
            <h1>{headinglarge?.title}</h1>
        </div>
    )
} 