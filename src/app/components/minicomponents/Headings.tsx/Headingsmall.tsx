import React from 'react'
import { Text } from '../../../../../source/types'

type HeadingSmall =
    {
        headingsmall: Text
    }

export default function Headingsmall({ headingsmall }: HeadingSmall) {
    return (
        <div className={`heading--${headingsmall && headingsmall.color ? headingsmall.color : "black"}`}>
            <h4>{headingsmall.title}</h4>
        </div>
    )
}
export type { Headingsmall }