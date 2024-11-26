'use client'
import { useState } from "react"
import { FaInstagram, FaXTwitter   } from "react-icons/fa6";
import { FaFacebookF, FaPinterestP ,FaYoutube  } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const linkData=[
  {
    title:'Customer care',
    links:['Contact Us','Call Now: 800 227 8437','FAQ','Track Your Order','Book An Appointment','Accessibility',]
  },
  {
    title:'Our Company',
    links:['Find a Boutique ','careers ','CARTIER AND CORPORATE SOCIAL RESPONSIBILITY','credits',]
  },
  {
    title:'Legal Area',
    links:['Terms of Use','Privacy Policy','Conditions of Sale','Accessibility Statement','California Privacy Rights','Human Rights Statement ','Do not sell or share my personal information']
  }
]

function FooterLinks({link}) {
  const{title,links}=link
  const [opened,setOpened]=useState(false)
  return (
    <div className="flex  flex-col gap-10 h-full ">
        <div className="w-full flex justify-between"> 
          <h3 className="font-semibold text-xl uppercase ">{title}
          </h3>
          <button className={` ${opened ? 'rotate-180':''} transition-all text-2xl md:hidden`} onClick={()=>{setOpened(!opened)}}><MdKeyboardArrowDown /></button>
        </div>
        <ul className={`text-sm gap-4 flex flex-col uppercase font-thin ${opened ? '':'hidden md:flex'}`}>
          {links.map((item,index)=>{
          return <li key={index}><a href="" className="link-underline" >{item}</a></li>  
            })}
        </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t pt-5">
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-8 py-5  gap-y-10 ">
        {linkData.map((item,index)=><FooterLinks key={index} link={item}/>)}
        <div className="h-full border-t md:border-none place-items-center md:place-items-start">
          <h3 className="font-semibold text-xl mb-8 uppercase md:mt-0 mt-10">Follow Us</h3>
          <ul className="flex gap-8 text-2xl ">
            <li><a href="" className="hover:text-red-600"><FaInstagram /></a></li>
            <li><a href="" className="hover:text-red-600"><FaFacebookF /></a></li>
            <li><a href="" className="hover:text-red-600"><FaXTwitter /></a></li>
            <li><a href="" className="hover:text-red-600"><FaYoutube /></a></li>
            <li><a href="" className="hover:text-red-600"><FaPinterestP /></a></li>
          </ul>
        </div>
      </section>
      <div className="border-t px-4 py-2 place-items-end text-sm">
        <p>copyright © 2024</p>
      </div>
    </footer>
  )
}
