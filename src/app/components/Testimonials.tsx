import React from 'react'
import Heading from './minicomponents/Headings.tsx/Heading'
import Image from 'next/image'
import Headingmedium from './minicomponents/Headings.tsx/Headingmedium'
import Paragraph from './minicomponents/Paragraph/Paragraph'
import { ImageType, Text } from '../../../source/types'
type User = {
    img: ImageType
    heading: Text
}

type Cards = {
    user: User
    readmore: Text
    paragraph: Text
    img: ImageType[]
}
type Testimonial = {
    heading: Text
    cards: Cards[]
    background: string
}
interface TestimonialCard {
    testimonial: Testimonial
}
export default function Testimonials({ testimonial }: TestimonialCard) {
    return (
        <div className={`container-fluid testimonial testimonial--${testimonial && testimonial?.background}`}>
            <div className="testimonial__wrapper container">
                <div className="testimonial__heading">
                    {testimonial && testimonial?.heading && <Heading heading={testimonial?.heading} />}
                </div>
                <div className="testimonial__cards">
                    {testimonial && testimonial?.cards && testimonial?.cards?.map((item, index) => {
                        return (
                            <div key={index} className="testimonial__card">
                                <div className="testimonial__upper">
                                    <div className="testimonial__userimg">
                                        {item && item?.user && item?.user?.img && <Image src={item?.user?.img?.src!} height={100} width={100} alt={item?.user?.img?.alt!} />}
                                        {item && item?.user && item?.user?.heading && <Headingmedium headingmedium={item && item?.user?.heading} />}
                                    </div>
                                    <div className="testimonial__readmore">
                                        {item && item?.readmore && <Headingmedium headingmedium={item?.readmore} />}
                                    </div>
                                </div>
                                <div className="testimonial__star">
                                    {item && item?.img?.map((elem, index) => {
                                        return (
                                            <Image src={elem?.src!} height={100} width={100} alt={elem?.alt!} key={index} />
                                        )
                                    })}
                                </div>
                                <div className="testimonial__paragraph">
                                    {item && item?.paragraph && <Paragraph paragraph={item && item?.paragraph} />}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
