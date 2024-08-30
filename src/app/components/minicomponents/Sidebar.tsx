"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { ImageType, Text } from '../../../../source/types';
import Link from 'next/link';
type Navdat =
    {
        logo: ImageType
        list: Text[]
    }
type Sidebar = {
    navdat: Navdat
    onDataFromChild: any
}
export default function Sidebar({ onDataFromChild, navdat }: Sidebar) {
    const [inputValue, setInputValue] = useState(false);
    const sendDataToParent = () => {
        onDataFromChild(inputValue)
    }

    return (
        <div className='sidebar container'>
            <div className="sidebar__wrapper">
                <div className="sidebar__upper">
                    <div className="sidebar__logo">
                        {navdat && navdat?.logo && <Link href={navdat?.logo && navdat?.logo?.link!}><Image src={navdat?.logo?.src!} width={100} height={100} alt={navdat?.logo?.alt!} /></Link>}
                    </div>
                    <div className="sidebar__btn">
                        <div className="sidebar__crossbtn">
                            <RxCross1 onClick={() => {
                                sendDataToParent()
                            }
                            } />
                        </div>
                    </div>
                </div>
                <div className="sidebar__items">
                    <ul>
                        {navdat && navdat?.list?.map((item, index: number) => {
                            return (
                                <li key={index}>{item.title}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
