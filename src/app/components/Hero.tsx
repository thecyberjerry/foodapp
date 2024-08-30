import React from 'react'
import Navbar from './Navbar'
import Headinglarge from './minicomponents/Headings.tsx/Headinglarge'
import Headingsmall from './minicomponents/Headings.tsx/Headingsmall'
import Paragraph from './minicomponents/Paragraph/Paragraph'
import Button from './minicomponents/Button'
import { ButtonType, ImageType, Text } from '../../../source/types'

interface NavbarType {
    list: Text[]
    btn: ButtonType
}

type HeroType = {
    headingsmall: Text
    btn: ButtonType
    paragraph: Text
    headinglarge: Text
    list: Text[]
    background: ImageType
}
interface Hero {
    nav: NavbarType
    logo: ImageType
    hero: HeroType
}
export default function Hero({ nav, logo, hero }: Hero) {
    return (
        <div className='container-fluid hero' style={{ backgroundImage: `url(${hero && hero?.background?.src})` }}>
            <div className="container hero__wrapper">
                <div className="hero__nav">
                    <Navbar navdata={nav && nav} logo={logo && logo} />
                </div>
                <div className="hero__text">
                    {hero && hero?.headingsmall &&
                        <Headingsmall headingsmall={hero && hero?.headingsmall} />}
                    {hero && hero?.headinglarge &&
                        <Headinglarge headinglarge={hero && hero?.headinglarge} />}
                    {hero && hero?.paragraph && <Paragraph paragraph={hero && hero?.paragraph} />
                    }
                    {hero && hero?.btn &&
                        <Button btn={hero && hero?.btn} />}
                </div>
            </div>
        </div>
    )
}
export type { NavbarType }