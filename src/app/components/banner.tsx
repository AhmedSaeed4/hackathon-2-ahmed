import Image from "next/image"
import del from "../assets/logos/Delivery.png"
import x from "../assets/logos/x.png"

const Banner = () => {
  return (
    <div className="sm:w-[1440px] sm:h-[41px] w-[390px] h-[54px]  bg-[#2A254B] flex items-center sm:justify-end justify-center sm:p-0  p-[16px] ">
        <div className=" flex items-center justify-center gap-[8px]">
            <Image src={del} alt="" className="w-[14px] h-[11px] "/> 
            <p className="font-satoshi font-normal text-[14px] leading-[18.9px] text-white ">Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        <Image src={x} alt="" className="w-[12px] h-[12px] sm:ml-[483px] sm:mr-[16px] ml-[16px  ] "/> 
        
    </div>
  )
}

export default Banner