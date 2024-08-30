import React from 'react'
import Aboutuscard from './minicomponents/Aboutuscard'
import { ButtonType, ImageType, Text } from '../../../source/types';
interface MyAboutus {
    direction?: string;
    img?: ImageType
    headingsmall?: Text
    heading?: Text
    paragraph?: Text
    list?: Text[]
    background?: string
    btn?: ButtonType[]
}
type CustomAbout =
    {
        aboutus: MyAboutus[]
    }
export default function Aboutus({ aboutus }: CustomAbout) {
    return (
        <div className='container-fluid aboutus'>
            {aboutus && aboutus?.map((item, index: number) => {
                return (
                    <Aboutuscard key={index} aboutus={item} />
                )
            })}
        </div >
    )
}
export type { MyAboutus }