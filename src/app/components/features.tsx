import Image from "next/image"
import delivery from "../assets/delivery.png"
import check from "../assets/Checkmark--outline.png"
import purchase from "../assets/Purchase.png"
import sprout from "../assets/Sprout.png"

const Features = () => {
  return (
    <div className="sm:w-[1440px] sm:h-[476px]  bg-white relative xs:w-[390px] xs:h-[1052px] ">
        <h3 className="sm:w-[366px] sm:h-[34px] absolute sm:top-[80px] sm:left-[529px] font-clash font-normal sm:text-[24px] sm:leading-[33.6px] xs:w-[274px] xs:h-[56px]  xs:top-[48px] xs:left-[24px] xs:text-[20px] xs:leading-[28px] ">What makes our brand different</h3>
        <div className="sm:w-[305px] sm:h-auto absolute sm:top-[150px] sm:left-[80px]  sm:p-[48px] flex gap-[10px] bg-[#F9F9F9] xs:w-[342px] xs:h-[196px] xs:top-[140px] xs:left-[24px] xs:py-[24px] xs:px-[36px]   ">
            <div className=" w-full h-auto flex flex-col gap-[12px] text-[#2A254B]">
                <Image src={delivery} alt="delivery icon" className=" w-[24px] h-[24px]"/>
                <h4 className="   font-clash font-normal text-[20px] leading-[28px] ">Next day as standard</h4>
                <p className="    font-satoshi font-normal  text-[16px] leading-[24px] ">Order before 3pm and get your order the next day as standard</p>
            </div>
        </div>
 
        <div className="sm:w-[305px] sm:h-auto absolute sm:top-[150px] sm:left-[407px]  sm:p-[48px] flex gap-[10px] bg-[#F9F9F9] xs:w-[342px] xs:h-[196px] xs:top-[362px] xs:left-[24px] xs:py-[24px] xs:px-[36px]  ">
            <div className=" w-full h-auto flex flex-col gap-[12px] text-[#2A254B]">
                <Image src={check} alt="delivery icon" className=" w-[24px] h-[24px]"/>
                <h4 className="    font-clash font-normal text-[20px] leading-[28px] ">Made by true artisans</h4>
                <p className="     font-satoshi font-normal  text-[16px] leading-[24px] ">Handmade crafted goods made with real passion and craftmanship</p>
            </div>
        </div>

        <div className="sm:w-[305px] sm:h-auto absolute sm:top-[150px] sm:left-[730px]  sm:p-[48px] flex gap-[10px] bg-[#F9F9F9] xs:w-[342px] xs:h-[196px] xs:top-[584px] xs:left-[24px] xs:py-[24px] xs:px-[36px] ">
            <div className=" w-full h-auto flex flex-col gap-[12px] text-[#2A254B]">
                <Image src={purchase} alt="delivery icon" className=" w-[24px] h-[24px]"/>
                <h4 className="    font-clash font-normal text-[20px] leading-[28px] ">Unbeatable prices</h4>
                <p className="     font-satoshi font-normal  text-[16px] leading-[24px] ">For our materials and quality you won’t find better prices anywhere</p>
            </div>
        </div>

        <div className="sm:w-[305px] sm:h-auto absolute sm:top-[150px] sm:left-[1055px] sm:p-[48px] flex gap-[10px] bg-[#F9F9F9] xs:w-[342px] xs:h-[196px] xs:top-[806px] xs:left-[24px] xs:py-[24px] xs:px-[36px] ">
            <div className=" w-full h-auto flex flex-col gap-[12px] text-[#2A254B] ">
                <Image src={sprout} alt="delivery icon" className=" w-[24px] h-[24px]"/>
                <h4 className="     font-clash font-normal text-[20px] leading-[28px] ">Recycled packaging</h4>
                <p className="      font-satoshi font-normal  text-[16px] leading-[24px] ">We use 100% recycled to ensure our footprint is more manageable</p>
            </div>
        </div>
    </div>
  )
}

export default Features