import Image from 'next/image'
import React from 'react'
import Headingsmall from '../minicomponents/Headings.tsx/Headingsmall'
import Heading from '../minicomponents/Headings.tsx/Heading'
import Paragraph from '../minicomponents/Paragraph/Paragraph'
import Button from '../minicomponents/Button'
import { MyAboutus } from '../Aboutus'
type SingleAboutus =
    {
        aboutus: MyAboutus
    }
export default function Aboutuscard({ aboutus }: SingleAboutus) {
    return (
        <div className={`container-fluid aboutus aboutus--${aboutus && aboutus?.background}`}>
            <div className={`aboutus__wrapper container aboutus--${aboutus.direction && aboutus.direction}`}>
                <div className="aboutus__imgbox">
                    <div className="aboutus__img">
                        {aboutus && aboutus?.img && <Image src={aboutus?.img?.src!} height={100} width={100} alt={aboutus?.img?.alt!} />}
                    </div>
                    <div className='aboutus__btn--mobile'>
                        {aboutus && aboutus?.btn?.map((elem, index) => {
                            return (
                                <Button key={index} btn={elem} />
                            )
                        })}
                    </div>
                </div>
                <div className="aboutus__text">
                    {aboutus && aboutus?.headingsmall &&
                        <Headingsmall headingsmall={aboutus?.headingsmall} />
                    }
                    {
                        aboutus && aboutus?.heading &&
                        <Heading heading={aboutus?.heading} />
                    }
                    {
                        aboutus && aboutus?.paragraph &&
                        <Paragraph paragraph={aboutus?.paragraph} />
                    }
                    <ul>
                        {aboutus && aboutus?.list?.map((aboutus, index) => {
                            return (
                                <li key={index}>{aboutus?.title}</li>
                            )
                        })}
                    </ul>
                    <div className='aboutus__btn'>
                        {aboutus && aboutus?.btn?.map((elem, index) => {
                            return (
                                <Button btn={elem} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}
