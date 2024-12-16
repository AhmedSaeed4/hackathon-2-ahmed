import Image from "next/image"
import search from "../assets/Search.png"
import cart from "../assets/Shopping--cart.png"
import user from "../assets/User--avatar.png"
import menu from "../assets/Menu.png"
import Link from "next/link"

const NavBar2 = () => {
  return (
    <div className=" sm:w-[1440px]  relative sm:h-[80px] xs:w-[390px] xs:h-[69px] ">
    <div className=" absolute top-[26px] left-[242px] flex gap-[20px] xs:flex sm:hidden ">
      <Image src={search} alt="" className="w-[16px] h-[16px]"/>
      <Link href={"cart"}> <Image src={cart} alt="" className="w-[16px] h-[16px]"/></Link>
      <Image src={user} alt="" className="w-[16px] h-[16px]"/>
      <Image src={menu} alt="" className="w-[16px] h-[16px]"/>
   

    </div>
    <h1 className="w-[65px] h-[30px] absolute sm:top-[25px] top-[20px]  sm:left-[80px] xs:left-[24px] font-clash text-[24px] ">Avion</h1> 
    <Link href={"cart"}> <Image src={cart} alt="" className=" w-[16px] h-[16px] absolute top-[30px] left-[1312px] "/></Link>
    <Image src={user} alt="" className=" w-[16px] h-[16px] absolute top-[30px] left-[1344px] "/>
    <Image src={search} alt="" className=" sm:w-[16px] sm:h-[16px] absolute sm:top-[30px] sm:left-[1280px] sm:block xs:hidden "/>


    <ul className="   h-auto w-auto absolute top-[29px] left-[297px] gap-[44px] text-[#726E8D] sm:flex xs:hidden  font-satoshi font-normal text-[16px] leading-[21.6px] ">
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

export default NavBar2