'use client'
import { Fugaz_One } from 'next/font/google'
import { IoBagOutline , IoPersonOutline , IoLocationOutline , IoSearchOutline   , IoHeartOutline , IoCloseSharp } from "react-icons/io5";
import { GiCrown } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
import Search from './Search';

const fugaz= Fugaz_One({ subsets: ["latin"], weight: ['400'] })

export default function Header() {
  const [searchOpen,setSearchOpen]=useState(false)
  const [dropDownMenu,setDropDownMenu]=useState(false)
  return (
    <>
      <header className='bg-white flex flex-col w-full '>
        <section className='p-5 lg:px-16 md:pb-0 grid grid-cols-3  items-start w-full'>
          <ul className='md:flex flex-wrap gap-4 font-thin uppercase text-sm xl:w-[400px] w-[180px] hidden'>
            <li><a href="" className='link-underline'>united states</a></li>
            <li><a href="" className='link-underline'>contact us</a></li>
            <li><a href="" className='link-underline'>services</a></li>
          </ul>
          <div className='md:hidden flex gap-4 text-[20px]'>
            <button onClick={()=>{setDropDownMenu(!dropDownMenu);setSearchOpen(false)}}><CiMenuBurger className=''/></button>
            <button onClick={()=>{setSearchOpen(!searchOpen);setDropDownMenu(false)}} className='text-[20px] hover:cursor-pointer hover:opacity-50 transition-all'>
              {searchOpen ? <IoCloseSharp  />:<IoSearchOutline />}
            </button>
          </div>
          <h2 className={`${fugaz.className} lg:text-5xl sm:text-4xl text-3xl place-items-center `}>
            <p className={`${fugaz.className} lg:text-4xl sm:text-3xl text-2xl bg-clip-text text-transparent text-center bg-gradient-to-b from-black to-black/40`}>Crown </p>
            <GiCrown />
          </h2>
          <div className='flex gap-4 text-[20px] justify-end'>
            <IoHeartOutline className='hover:cursor-pointer hover:opacity-50 transition-all md:inline hidden'/>
            <IoPersonOutline className='hover:cursor-pointer hover:opacity-50 transition-all md:inline hidden'/>  
            <IoLocationOutline className='hover:cursor-pointer hover:opacity-50 transition-all'/>
            <IoBagOutline className='hover:cursor-pointer hover:opacity-50 transition-all'/>  
          </div>
        </section>
      </header>
      <nav className=' w-full flex-col items-center sticky top-0 z-50'>
        <ul className={` h-0 md:h-fit md:pb-6 md:pt-2 overflow-hidden flex flex-col md:flex-row bg-white gap-4 font-thin items-center  border-b w-full transition-all duration-500 justify-center ${dropDownMenu ? ' h-[200px] ' : '  '}`}>
          <li><a href="" className="hover:border-red-600 transition-all duration-200 border-b-2 border-transparent">Watches</a></li>
          <li><a href="" className="hover:border-red-600 transition-all duration-200 border-b-2 border-transparent">Perfumes</a></li>
          <li><a href="" className="hover:border-red-600 transition-all duration-200 border-b-2 border-transparent">Bags & Accessories
          </a></li>
          <li><a href="" className="hover:border-red-600 transition-all duration-200 border-b-2 border-transparent">Jewelry</a></li>
          {/* search btn */}
          <li className='md:flex hidden items-center ml-2'>
            <button onClick={()=>{setSearchOpen(!searchOpen)}} className='text-[20px] border-l border-black pl-5 hover:cursor-pointer hover:opacity-50 transition-all'>
              {searchOpen ? <IoCloseSharp  />:<IoSearchOutline />}
            </button>
          </li>
        </ul>
        <div className={` bg-white border-b flex transition-all duration-500 h-0 overflow-hidden ${searchOpen ? 'h-[170px]' :''} w-full`}>
            <Search />
        </div>
        
      </nav>
    </>
  )
}
