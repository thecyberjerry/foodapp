import Image from 'next/image'
import React from 'react'
import Paragraph from './minicomponents/Paragraph/Paragraph'
import Button from './minicomponents/Button'
import Trademark from './minicomponents/Headings.tsx/Trademark'
import Headingmedium from './minicomponents/Headings.tsx/Headingmedium'
import { ButtonType, ImageType, Logo, Text } from '../../../source/types'
import Link from 'next/link'
type Lists = {
    label: Text
    list: Text[]
}
type TrademarkType = {
    paragraph: Text
    policylist: Text[]
    socials: ImageType[]
}
type FooterType = {
    paragraph: Text
    lists: Lists[]
    newsletter: Text
    input: Text
    btn: ButtonType
    trademark: TrademarkType
}
interface Footer extends Logo {
    footer: FooterType
}
export default function Footer({ footer, logo }: Footer) {
    return (
        <div className='container footer'>
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <div className="footer__img">
                        {logo && <Link href={logo && logo?.link!}><Image src={logo && logo?.src!} height={100} width={100} alt={logo && logo?.alt!} /></Link>}
                    </div>
                    {footer && footer?.paragraph && <Paragraph paragraph={footer?.paragraph} />}
                </div>
                <div className="footer__list">
                    {footer && footer?.lists && footer?.lists?.map((item, index) => {
                        return (
                            <div key={index} className="footer__content">
                                <label htmlFor="list"><Headingmedium headingmedium={item && item?.label} /></label>
                                <ul>
                                    {item && item?.list?.map((elem, index) => {
                                        return (
                                            <li key={index}>{elem.title}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className="footer__inputbox">
                    {footer && footer?.newsletter && <Headingmedium headingmedium={footer?.newsletter} />}
                    {footer && footer?.input && footer?.btn && <div className="footer__inputbtn">
                        <input type="text" placeholder={footer?.input?.title} />
                        <Button btn={footer && footer?.btn} />
                    </div>}
                </div>
            </div>
            <div className="footer__trademark">
                <Trademark trademark={footer && footer?.trademark} />
            </div>
        </div>
    )
}
