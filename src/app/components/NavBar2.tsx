import Image from "next/image"
import search from "../assets/Search.png"
import cart from "../assets/Shopping--cart.png"
import user from "../assets/User--avatar.png"
import menu from "../assets/Menu.png"
import Link from "next/link"

const NavBar2 = () => {
  return (
    <div className=" sm:w-[1440px] flex items-center text-center sm:pl-[80px] pl-[24px] py-[25px]  w-[390px] ">

      <h1 className="  mr-[152px] leading-[29.52px] font-normal  font-clash text-[24px] ">Avion</h1>  
      <ul className="  h-auto w-auto sm:mr-[308px]  gap-[44px] text-[#726E8D] sm:flex hidden  font-satoshi font-normal text-[16px] leading-[21.6px] ">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
      </ul>
      
      <div className=" flex gap-[16px] ">
        <Image src={search} alt="" className=" sm:w-[16px] sm:h-[16px]    "/>
        <Link href={"cart"}> <Image src={cart} alt="" className=" w-[16px] h-[16px]    "/></Link>
        <Image src={user} alt="" className=" w-[16px] h-[16px]    "/>
        <Image src={menu} alt="" className="w-[16px] h-[16px] block sm:hidden"/>
      </div>
</div>
)
  
}

export default NavBar2