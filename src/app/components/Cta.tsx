import React from 'react'
import Heading from './minicomponents/Headings.tsx/Heading'
import Paragraph from './minicomponents/Paragraph/Paragraph'
import Button from './minicomponents/Button'
import { ButtonType, Text } from '../../../source/types'

interface Cta {
    heading: Text
    paragraph: Text
    btn: ButtonType[]
}
type MyCta =
    {
        cta: Cta
    }
export default function Cta({ cta }: MyCta) {
    return (
        <div className='container-fluid cta'>
            <div className="container cta__content">
                {cta && cta?.heading && <Heading heading={cta && cta?.heading} />}
                {cta && cta?.paragraph && <Paragraph paragraph={cta && cta?.paragraph} />}
                <div className="cta__btn">
                    {cta && cta?.btn?.map((item: any, index: number) => {
                        return (
                            <Button key={index} btn={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
