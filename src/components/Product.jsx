import Image from "next/image"
import Button from "./Button"
import { SlHeart } from "react-icons/sl";

export default function Product({src,title,desc,price,big,New,Sale}){
  return (
    <article className={`hover:border-opacity-100 relative self-start
    border-opacity-0 border border-black transition-all duration-500 group p-5 ${big ? 'md:max-w-[500px] max-w-[400px]' :'md:max-w-[300px] max-w-[200px] '}`}>
    {Sale && <span className="absolute left-0 z-10 top-4 bg-black px-5 text-white">Sale</span>}
    {New &&<span className={` absolute left-0 z-10 bg-black px-5 text-white ${Sale ? 'top-11 px-2' : 'top-4'} `}>New</span>}
    <span className="md:group-hover:opacity-100 md:opacity-0 bg-white rounded-full md:p-2 p-1 absolute top-4 right-4 z-10 transition-all duration-500">
      <SlHeart className="md:text-xl text-lg " />
    </span>
    <Image src={src} alt="" width={300} height={300} className={`bg-no-repeat object-cover w-full 
      ${big?'h-[400px] ':'h-[200px]'}  group-hover:scale-105 transition-all duration-500`} />
    <div className="my-4 text-center">
      <h4 className="line-clamp-1 sm:text-lg text-base font-semibold ">{title}</h4>
      <p className="line-clamp-2 sm:text-sm text-[12px] ">{desc}</p>
      <span className="font-semibold">
        {price} $
      </span>
    </div>
    <div className="md:group-hover:opacity-100 md:opacity-0 transition-all duration-500  ">
      <Button text="Add to Cart" dark full />
    </div>
  </article>
  )
}