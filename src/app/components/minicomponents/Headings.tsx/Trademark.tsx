import Image from 'next/image'
import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { ImageType, Text } from '../../../../../source/types'
import Link from 'next/link'

type TrademarkType = {
    paragraph: Text
    policylist: Text[]
    socials: ImageType[]
}
interface Trademark {
    trademark: TrademarkType
}
export default function Trademark({ trademark }: Trademark) {
    return (
        <div className='trademark'>
            <div className="trademark__policy">
                {trademark && trademark?.paragraph && <Paragraph paragraph={trademark?.paragraph} />}
                <ul>
                    {trademark && trademark?.policylist && trademark?.policylist?.map((item, index) => {
                        return (<Link key={index} href={item && item.link!} ><li>{item.title}</li></Link>
                        )
                    })}
                </ul>
            </div>
            <div className="trademark__socials">
                <ul>
                    {trademark && trademark?.socials && trademark?.socials?.map((item, index) => {
                        return (
                            <li key={index}>
                                <Image src={item?.src!} height={100} width={100} alt={item?.alt!} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
