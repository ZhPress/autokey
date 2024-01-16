import React from 'react'
import { motion } from 'framer-motion'
import image from '../img/footerKey.png'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { TbClockCheck } from "react-icons/tb";


export function Footer() {
  return (
        <footer>
         
          <div className='foot1-div'>
            <div className='inner1'>КОНТАКТИ</div>
            <ul>
              <li className='li-f1'><MdOutlinePhoneIphone size='1.5rem' color='white'/> <span className='sp1'>+38(096)081-65-36</span> </li>
              <li className='li-f1'><HiMiniBuildingOffice2 size='1.5rem' color='white' /> <span>м. Суми, вул. Лучанська, 38</span></li>
              <li className='li-f1'><TbClockCheck size='1.5rem' color='white' /> <span className='sp1'>8.00 - 19.00 </span></li>
            </ul>
            
          </div>
          <div className='foot1-div'>
          <div className='inner2'>ПОПУЛЯРНІ ПОСЛУГИ</div>
          <ul>
            <li className='li-f2'>Виготовлення всіх типів ключів при повній втраті</li>
            <li className='li-f2'>Виготовлення smartkey </li>
            <li className='li-f2'>Виготовлення дублікатів ключів із брелоком</li>
          </ul>
          </div>
          
          <div className='foot2-div'>
          <motion.img 
          src={image} 
            initial={{
              rotateY: [180]
            }}
          />
             
          </div>
          
    </footer>
  )
}
