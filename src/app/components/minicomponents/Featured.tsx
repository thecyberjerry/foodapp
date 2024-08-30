import React from 'react'
import Heading from './Headings.tsx/Heading'
import Image from 'next/image'
import { ImageType, Text } from '../../../../source/types'

type Img =
    {
        img: ImageType
    }
interface Featured {
    title: Text
    images: Img[]
}
type MyFeatured = {
    featured: Featured
}
export default function Featured({ featured }: MyFeatured) {
    return (
        <div className='container featured'>
            <div className="featured__heading">
                {featured && featured?.title && <Heading heading={featured?.title} />}
            </div>
            <div className="featured__content">
                {featured && featured?.images && featured?.images?.map((item: any, index: number) => {
                    return (
                        <div key={index} className="featured__img">
                            <Image src={item?.img?.src} height={100} width={100} alt={item?.img?.alt} />
                            <Heading heading={item?.title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
