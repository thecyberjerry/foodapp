import React from 'react'
import { Text } from '../../../../../source/types'

interface Headingmedium {
    headingmedium: Text
}

export default function Headingmedium({ headingmedium }: Headingmedium) {
    return (
        <div className={`heading--${headingmedium && headingmedium.color ? headingmedium.color : "black"}`}>
            <h3>{headingmedium.title}</h3>
        </div>
    )
}
