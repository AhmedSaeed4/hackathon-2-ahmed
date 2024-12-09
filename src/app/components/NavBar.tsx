import Image from "next/image"
import search from "../assets/Search.png"
import cart from "../assets/Shopping--cart.png"
import user from "../assets/User--avatar.png"
import menu from "../assets/Menu.png"


const Navbar = () => {
  return (
    <div className=" sm:w-[1440px] sm:h-[132px] xs:w-[390px] xs:h-[69px] bg-white">
        <Image src={search} alt="" className=" sm:w-[16px] sm:h-[16px] absolute sm:top-[26px] sm:left-[26px] sm:block xs:hidden "/>
        <div className="absolute top-[26px] left-[318px] flex gap-[20px] xs:flex sm:hidden">
          <Image src={search} alt="" className="w-[16px] h-[16px]"/>
          <Image src={menu} alt="" className="w-[16px] h-[16px]"/>
        </div>
        <h1 className="w-[65px] h-[30px] absolute top-[20px] sm:left-[687px] xs:left-[24px] font-clash text-[24px] ">Avion</h1> 
        <Image src={cart} alt="" className=" w-[16px] h-[16px] absolute top-[26px] left-[1364px] "/>
        <Image src={user} alt="" className=" w-[16px] h-[16px] absolute top-[26px] left-[1396px] "/>
        <div className="w-[1386px] absolute top-[70px] left-[28px] border  border-[#0000001A] sm:block xs:hidden"></div>

        <ul className="  h-auto w-auto absolute top-[90px] left-[382px] gap-[44px] text-[#726E8D] sm:flex xs:hidden">
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