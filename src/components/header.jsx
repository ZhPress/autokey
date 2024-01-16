import React from 'react'
//import phone from '../img/1062678.png'
import {motion} from 'framer-motion'

export function Header() {
  return (
    <div className='header'>
    <div className='h-phone'>
         <motion.label
        
        animate={{
          scale: [1, 1.2, 1],
          backgroundColor: ['rgb(0, 115, 255)', 'rgb(36, 135, 255)', 'rgb(0, 115, 255)'],
          boxShadow: ['none', '3px 7px 10px rgb(0, 0, 0, .5), inset 1px 0 1px rgba(255, 255, 255, 0.5)', 'none']
        }}
        
        transition={{ 
          delay: 2,
          duration: 2.5, 
          repeat: Infinity,
          repeatDelay: .5
          }}

        >+38(096)081-65-36</motion.label>
    </div>
      <div className='h-center'>
        <h1> AVTOKLUCHI </h1>
        <p id='p1'>виготовлення автомобільних ключів любої складності</p>
     
      </div>  
        

        <div className='h-adress'>
          <h2>8.00 - 19.00</h2>
          <p>Без вихідних</p>
        </div>
    </div>
  )
}