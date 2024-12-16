import Card from "./card"
import chair from "../assets/chair.png"
import vase from "../assets/vase.png"
import vase2 from "../assets/vase2.png"
import lamp from "../assets/lamp.png"
import Link from "next/link"


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

const Listings = () => {
  return (
    <div className="sm:w-[1440px]  w-[390px]  sm:px-[80px]  px-[24px] pt-[20px] pb-[40px] ">
    <div className=" grid sm:grid-cols-4 grid-cols-2  gap-[16px] sm:gap-[20px] ">
      {data.map((elem)=>{
        return( 
          <Card key={elem.id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price} />
        )
      })}
      
      </div>
      <Link href={'allproducts'} id="button-medium" className=" w-full sm:w-auto h-auto  bg-[#F9F9F9] flex mt-[40px] text-nowrap justify-center items-center sm:mx-[555px]  sm:mt-12 py-[16px] px-[32px] ">
              <p className="font-satoshi font-normal text-[16px] leading-[24px] ">View collection</p>
      </Link>
    </div>
  )
}

export default Listings