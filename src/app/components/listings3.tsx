import Card from "./card"
import chair from "../assets/chair.png"
import vase from "../assets/vase.png"
import vase2 from "../assets/vase2.png"
import lamp from "../assets/lamp.png"
import Link from "next/link"
import new1 from "../assets/new1.png"
import new2 from "../assets/new2.png"
import new3 from "../assets/new3.png"
import new4 from "../assets/new4.png"

const data = [
    {
      id: 1,
      image: chair,
      imagetitle:"The Dandy chair",
      price:"£250",
    },
    {
      id: 2,
      image: vase,
      imagetitle:"Rustic Vase Set",
      price:"£155",
    },
    {
      id: 3,
      image: vase2,
      imagetitle:"The Silky Vase",
      price:"£125",
    },
    {
      id: 4,
      image: lamp,
      imagetitle:"The Lucy Lamp",
      price:"£399",
    },
  ]
  
  const data2 = [
    {
      id: 1,
      image: new1,
      imagetitle:"The Dandy chair",
      price:"£250",
    },
    {
      id: 2,
      image: new2,
      imagetitle:"Rustic Vase Set",
      price:"£155",
    },
    {
      id: 3,
      image: new3,
      imagetitle:"The Silky Vase",
      price:"£125",
    },
    {
      id: 4,
      image: new4,
      imagetitle:"The Lucy Lamp",
      price:"£399",
    },
  ]

const Listings3 = () => {
  return (
    <div className="sm:w-[1440px] w-[390px] flex-col sm:px-[80px] px-[24px] sm:pb-[40px]">
       
        <div id="listing" className="grid sm:grid-cols-4 grid-cols-2 sm:mt-[28px]  gap-[16px] sm:mb-[20px] sm:gap-[20px]">
            {data.map((elem, id)=>{
                return(
                    <Card key={id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price}/>
                )
            })}
            
        </div>
        <div id="listing" className=" sm:grid-cols-4 grid-cols-2 sm:mt-[28px] gap-[16px] sm:mb-[20px] sm:gap-[20px] sm:grid hidden">
            {data2.map((elem, id)=>{
                return(
                    <Card key={id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price}/>
                )
            })}
            
        </div>
        
        <div id="listing" className="grid sm:grid-cols-4 grid-cols-2 sm:mt-[28px]  gap-[16px] sm:mb-[20px] sm:gap-[20px]">
            {data.map((elem, id)=>{
                return(
                    <Card key={id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price}/>
                )
            })}
            
        </div>
        <Link href={'products'} id="button-medium" className=" w-full sm:w-auto h-auto  bg-[#F9F9F9] flex mt-[40px]  text-nowrap justify-center items-center sm:mx-[555px]  sm:mt-[28px] py-[16px] px-[32px] ">
                <p className="font-satoshi font-normal text-[16px] leading-[24px] ">View collection</p>
        </Link>
        
    </div>
  )
}

export default Listings3