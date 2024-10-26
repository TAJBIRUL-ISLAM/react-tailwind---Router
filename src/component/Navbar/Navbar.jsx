import React, { useState } from 'react'
import { NavbarMenu } from '../mapdata/Data'
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import Textmenu from './Textmenu';
import ResponsiveMenu from '../ResponsiveMenu';


const Navbar = () => {
  const [isOpen, setIsOpen] =React.useState (false);
  return (
    <>
    <navbar>
      <div className='bg-[#E4E4E780]'>
      <div className='container flex justify-between items-center py-5 border-b'>
        
        {/* logo section */}
        <div className='w-[131px] h-[36px]'>
          <img src="/img/LOGO.png" alt="" />
        </div>
        {/* menu section */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-6'>
            {NavbarMenu.map((item)=>{
              return(
              <li key={item.id}>
                <a href={item.link} 
                className='inline-block text-[#71717A] text-[14px] font-blod py-1 PX-2'>{item.title}</a>
                

            </li>

              )
            })}
            
          </ul>
        </div>
        {/* mobile habburger menu */}
        <div className='lg:hidden pl-28' onClick={()=>setIsOpen(!isOpen)}>
          <MdMenu className='text-4xl'/>
        </div>

        
        {/* Email section */}
        <div className='flex items-center'>
          <div className='text-xl hover:bg-primary rounded-full duration-75 transition-shadow'>
          < IoIosNotifications />
        
          </div>
          <div className='flex items-center gap-1'>
          <img src="/img/Face.png" alt="" className='w-6 h-6 '/>
          <div>
            <h1 className='font-bold text-[16px] text-[#71717A]'>Usman Zafar</h1>
            <p className='text-[14px] text-[#71717A]'>usmanzafar@gmail.com</p>
          </div>
          </div>
        
        </div>
        

      </div>
      {/* Dashboard search section */}
            <div className='flex justify-between items-center container  '>
              <div>
                <p> <Textmenu>Welcome back</Textmenu></p>
                <h1 className='text-[#09090B] text-[24px] font-bold'>Dashboard</h1>
              </div>
              {/* Button section */}
              <div className=' flex  gap-2 '>
                
                <div><button className='flex items-center justify-center gap-2 rounded-md bg-white border px-1 py-1.5 cursor-pointer'>
                <CiSearch />
                  <input type="text" placeholder='search incident' className='text-[8px] py-1' />
                  </button></div>
                   <div><input type="text" placeholder='Sort By: Date modified' className='text-[9px]  py-2.5 px-3.5 rounded-md' />
                   </div>
                   <div> <button className=' rounded-md bg-primary border px-3.5 py-1.5 font-bold text-[14px]'>
                
                Cypher AI
                </button>
                </div>
                                         
                
                 </div>
                
              </div>
      </div>
      <Textmenu/>
    </navbar>
    <ResponsiveMenu isOpen= {isOpen}/>
    </>
  )
}

export default Navbar