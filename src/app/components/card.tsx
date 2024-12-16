"use client"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface propstype  {
    
    image: string | StaticImageData
    imagetitle: string,
    price: string
}

const Card = (props:propstype) => {
    const {image,imagetitle,price}= props
  return (
    <Link href={"products"}>
         <div>
             <div id="product-card" className=" w-[163px] h-[288px]  sm:w-auto sm:h-auto flex flex-col gap-[24px]  ">
            <div id="parent" className="  ">
                <Image src={image} alt=""/>
            </div>

            <div id="details" className="w-[163px] h-[288px]  sm:w-auto sm:h-auto  flex flex-col gap-2">
                <h4 className="font-clash font-normal text-[20px] leading-[28px] ">{imagetitle}</h4>
                <p className="font-satoshi font-normal text-[18px] leading-[27px] ">{price}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Card