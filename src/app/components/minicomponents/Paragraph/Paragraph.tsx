import React from 'react'
import { Text } from '../../../../../source/types'
type Paragraph =
    {
        paragraph: Text
    }
export default function Paragraph({ paragraph }: Paragraph) {
    return (
        <div className={`paragraph--${paragraph && paragraph?.color ? paragraph?.color : "black"}`}>
            <p>{paragraph && paragraph?.title}</p>
        </div>
    )
}
