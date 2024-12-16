import delivery from "../assets/delivery.png"
import check from "../assets/Checkmark--outline.png"
import purchase from "../assets/Purchase.png"
import sprout from "../assets/Sprout.png"
import Card2 from "./card2"
const data =[
    {
        image: delivery,
        title:"Next day as standard",
        content:"Order before 3pm and get your order the next day as standard"
    },
    {
        image: check,
        title:"Made by true artisans",
        content:"Handmade crafted goods made with real passion and craftmanship"
    }, {
        image: purchase,
        title:"Unbeatable prices",
        content:"For our materials and quality you won’t find better prices anywhere"
    }, {
        image: sprout,
        title:"Recycled packaging",
        content:"We use 100% recycled to ensure our footprint is more manageable"
    },
]
const Features2 = () => {
  return (
    <div className="sm:w-[1440px] sm:h-[355px] w-[390px] bg- sm:px-[86px] sm:pb-[86px] pb-[45px]  px-[24px] pt-[60px] flex flex-col sm:items-center  sm:gap-[51px] gap-[36px]">
        <p className="font-clash font-normal sm:text-[24px] text-[20px] sm:leading-[33.6px] leading-[28px] pr-[68px] sm:pr-0 ">What makes our brand different</p>
        <div className=" grid sm:grid-cols-4 sm:gap-[59px] gap-[36px] grid-cols-1 ">
            {data.map((elem, index)=>{
                return(
                    <Card2 key={index} image={elem.image} title={elem.title} content={elem.content} />
                )
            })}
        </div>
    </div>
  )
}

export default Features2