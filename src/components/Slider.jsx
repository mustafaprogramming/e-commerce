'use client'
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";

import { useEffect, useState } from "react"
import Button from "./Button"
import Image from "next/image";

const sliderData=[
  {
    title:'Explorer',
    subtitle:'Designed for exploration',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque culpa quaerat ipsam, consequatur amet aspernatur doloremque aliquam incidunt eligendi, accusantium praesentium pariatur mollitia consectetur ullam a, dolor molestiae aliquid dolorem!',
    image:'/sliderImg1.avif',
    theme:'dark',
  },
  {
    title:'La Panthère',
    subtitle:'Emblematic of Cartier fragrances',
    text:'Emblematic of Cartier fragrances, La Panthère perfume is an original feline-floral scent, marrying historic chypre with a mythical animal musk and fresh gardenia.',
    image:'/sliderImg2.avif',
    theme:'dark',
  },
  {
    title:'Ring de lure',
    subtitle:'Rings of embers',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque culpa quaerat ipsam, consequatur amet aspernatur doloremque aliquam incidunt eligendi, accusantium praesentium pariatur mollitia consectetur ullam a, dolor molestiae aliquid dolorem!',
    image:'/sliderImg3.png',
    theme:'light',
  },
  {
    title:'Classic',
    subtitle:'Bag of class',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque culpa quaerat ipsam, consequatur amet aspernatur doloremque aliquam incidunt eligendi, accusantium praesentium pariatur mollitia consectetur ullam a, dolor molestiae aliquid dolorem!',
    image:'/sliderImg4.png',
    theme:'light',
  },

]

export default function Slider() {
  const [slideIndex,setSlideIndex]=useState(0)
  const [readMore,setReadMore]=useState(false)
  const slideData=sliderData[slideIndex];
  const {title,subtitle,text,image,theme}=slideData;
  function moveSlide(arg){
    let limit=sliderData.length-1;
    let index=slideIndex + arg;
    if(index > limit){
      index=0
    }else if(index < 0){
      index = limit;
    }
    setSlideIndex(index)
  }
  useEffect(()=>{
    const id=setInterval(()=>{
      moveSlide(+1);
     },3500);
     return ()=>{
      clearInterval(id)
    }
  },[slideIndex])
  return (
    <section className="lg:h-screen md:h-[90vh] xs:h-[80vh] h-[60vh] w-full relative flex justify-center items-center mb-10">
      <article className={`w-full h-full absolute  ${theme==='dark'?"text-black":'text-white'} `}>
        <Image src={image} quality={100} alt="" width={1000} height={700} className="w-full h-full transition-all duration-300 bg-no-repeat bg-center bg-contain min-w-[600px] overflow-hidden absolute top-0 right-0"/>
        {readMore&&<div className="absolute w-full h-full md:hidden flex backdrop-blur-sm bg-black/10"></div>}
        <div className=" flex flex-col gap-0.5 absolute left-[10%] md:bottom-[50%] md:translate-y-1/2 bottom-[20%] mr-10">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:mb-4">{title}</h1>
          <h3 className=" lg:font-semibold text-base">{subtitle}</h3>
          <p className={`md:w-[400px] md:block text-sm ${readMore ? 'block ' : 'hidden' }`}>{text}
          </p>
          <button onClick={()=>setReadMore(!readMore)} className="font-semibold block text-start md:hidden">{!readMore?'Read more':'Read less'}</button>
          <div className="lg:mt-10 mt-3">
            <Button text="Details" large dark={theme==='dark'} />
          </div>
        </div>
      </article>
      <button className="md:flex hidden bg-black/50 hover:bg-black/70 text-white rounded-full p-3 absolute left-4" onClick={()=>moveSlide(-1)}><IoIosArrowBack /></button>
      <button className="md:flex hidden bg-black/50 hover:bg-black/70 text-white rounded-full p-3 absolute right-4" onClick={()=>moveSlide(+1)}><IoIosArrowForward /></button>
      <aside className="absolute md:w-[50%] w-full bottom-6 left-2/4 -translate-x-2/4 flex justify-center items-center gap-4">
      {sliderData.map((slide,index)=>{
        return <button onClick={()=>setSlideIndex(index)} key={index} className="group relative ">
                <span className={`absolute text-[12px] overflow-visible whitespace-nowrap hidden group-hover:flex w-full justify-center -translate-y-full ${theme==='dark'?'text-black':'text-white'}`}>
                  {slide.title}
                </span>
                <div className={`${index===slideIndex?"sm:w-20 w-16 ":"sm:w-10 w-8 "} 
                ${theme==='dark'? 
                index===slideIndex?'bg-black':'bg-gray-500/50' 
                :
                index===slideIndex?'bg-white':'bg-gray-100/50'} rounded-sm h-1 `}></div>
              </button>
      })}
      </aside>
      
    </section>
  )
}

