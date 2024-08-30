"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from './minicomponents/Button'
import { Logo } from '../../../source/types'
import { NavbarType } from './Hero'
import Sidebar from './minicomponents/Sidebar'
interface NavType extends Logo {
    navdata: NavbarType
}

export default function Navbar({ navdata, logo }: NavType) {
    const [dataFromChild, setDataFromChild] = useState(false);
    const handleDataFromChild = (data: any) => {
        setDataFromChild(data);
    }
    return (
        <div className='nav'>
            <div className={`nav--${dataFromChild ? "isopen" : "close"} nav__sidebar `}>
                <Sidebar navdat={{ logo: logo!, list: navdata?.list! }} onDataFromChild={handleDataFromChild} />
            </div>
            <div className="nav__logo">
                <div className="nav__img">
                    {logo && <Image src={logo && logo?.src!} height={100} width={100} alt={logo && logo?.alt!} />}
                </div>
            </div>
            <div className="nav__items">
                <ul>
                    {navdata && navdata?.list?.map((item: any, index: number) => {
                        return (
                            <li className='nav--listlight' key={index}>{item.title}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="nav__btn">
                {navdata && navdata?.btn && <Button btn={navdata?.btn} />}
                <div className="nav__mobicons">
                    <Image src={"./assets/navbar/wallet.svg"} height={100} width={100} alt="Some Image" />
                    <Image src={"./assets/navbar/hamburger.svg"} height={100} width={100} alt="Some Image"
                        onClick={() => {
                            setDataFromChild(true)
                        }
                        } />
                </div>
            </div>
        </div>
    )
} 