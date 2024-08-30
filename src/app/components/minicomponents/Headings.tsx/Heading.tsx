import React from 'react'
import { Text } from '../../../../../source/types'
interface HeadingType {
    heading?: Text
}
export default function Heading({ heading }: HeadingType) {
    return (
        <div className={`heading--${heading && heading?.color ? heading?.color : "black"}`}>
            <h2>{heading?.title}</h2>
        </div>
    )
} 