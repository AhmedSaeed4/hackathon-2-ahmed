import Image from "next/image"
import search from "../assets/Search.png"
import cart from "../assets/Shopping--cart.png"
import user from "../assets/User--avatar.png"
import menu from "../assets/Menu.png"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className=" sm:w-[1440px]   w-[390px] flex flex-col gap-[20px]  px-[28px] pt-[20px] pb-[20px] ">
        <div className="flex justify-between items-center">
            <Image src={search} alt="" className=" sm:w-[16px] sm:h-[16px]  sm:block hidden "/>
            
            <h1 className="  font-clash text-[24px] ">Avion</h1>

            <div className="  gap-[20px] flex justify-center sm:hidden">
                <Image src={search} alt="" className="w-[16px] h-[16px]"/>
                <Image src={menu} alt="" className="w-[16px] h-[16px]"/>
            </div>

            <div className=" sm:flex gap-[16px] hidden ">
                <Link href={"cart"}> <Image src={cart} alt="" className=" w-[16px] h-[16px]  "/></Link>
                <Image src={user} alt="" className=" w-[16px] h-[16px]  "/>
            </div> 
        </div>

        <div className=" border  border-[#0000001A] sm:block hidden"></div>

        <ul className=" self-center h-auto w-auto  gap-[44px] text-[#726E8D] sm:flex hidden">
            <li>Plant pots</li>
            <li>Ceramics</li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
        </ul>
    </div>
  )
}

export default Navbar