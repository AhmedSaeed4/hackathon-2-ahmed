import Image from "next/image"
import short from "../assets/short.png"
import Link from "next/link"

const Hero2 = () => {
  return (
    <div className="sm:w-[1440px] sm:h-[704px]   w-[390px]  h-[639px] ">
    <div className="bg-[url('/bgimgmain.jpeg')] sm:w-[1440px] sm:h-[704px] w-[390px] h-[370px] pt-[130px] pl-[730px] bg-cover sm:bg-center sm:block hidden bg-left-bottom  ">
    <div className="sm:w-[630px] sm:h-[444px]  bg-white py-[48px] flex flex-col sm:gap-[157px] pl-[56px]    w-auto  h-auto    gap-[32px] ">
        <div className=" w-auto h-auto     sm:left-[56px] flex flex-col sm:gap-[20px] gap-[12px]  ">
            <h2 className="sm:w-[513px] sm:h-[90px] font-clash sm:text-[32px] sm:leading-[44.8px]  font-normal   w-[341px]  h-[90px]   text-[32px]  leading-[29.52px]">Luxury homeware for people who love timeless design quality</h2>
            <p className=" font-satoshi font-normal  sm:text-[18px] sm:leading-[27px]  text-[18px]  leading-[27px] sm:block  hidden text-[#5B5676] ">Shop the new Spring 2022 collection today</p>
            <p className="w-[341px] h-[66px] font-satoshi font-normal  sm:text-[18px] sm:leading-[27px]  text-[16px]  leading-[21.6px]  block sm:hidden text-[#5B5676] ">With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
        </div>
        <Link href={'/allproducts'} className="sm:w-auto max-w-max  w-[337px] h-auto    bg-[#F9F9F9] py-[16px] px-[32px] flex items-center justify-center gap-[10px] hover:bg-slate-200 ">
                <p className="font-Satoshi text-[16px] font-normal  leading-[24px] ">View collection</p>
        </Link>
        </div>
        
    </div>
    <div className="sm:w-[630px] sm:h-[444px]   pt-[47px] pb-[32px] px-[24px]  flex-col sm:gap-[157px]   sm:hidden flex    w-auto  h-auto    gap-[32px] ">
        <div className=" w-auto h-auto     sm:left-[56px] flex flex-col sm:gap-[20px] gap-[12px]  ">
            <h2 className="sm:w-[513px] sm:h-[90px] font-clash sm:text-[32px] sm:leading-[44.8px]  font-normal   w-[341px]  h-[90px]   text-[24px]  leading-[29.52px]">Luxury homeware for people who love timeless design quality</h2>
            <p className=" font-satoshi font-normal  sm:text-[18px] sm:leading-[27px]  text-[16px]  leading-[21.6px] sm:block  hidden text-[#5B5676] ">Shop the new Spring 2022 collection today</p>
            <p className="w-[341px] h-[66px] font-satoshi font-normal  sm:text-[18px] sm:leading-[27px]  text-[16px]  leading-[21.6px]  block sm:hidden text-[#5B5676] ">With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
        </div>
        <Link href={'/allproducts'} className="sm:w-auto sm:max-w-max  w-[337px] h-auto    bg-[#F9F9F9] py-[16px] px-[32px] flex items-center justify-center gap-[10px] hover:bg-slate-200 ">
                <p className="font-Satoshi text-[16px] font-normal  leading-[24px] ">View collection</p>
        </Link>
        </div>
    <Image src={short} alt="bg image" className="  block sm:hidden  top-[335px]  "/> 
</div>
  )
}

export default Hero2