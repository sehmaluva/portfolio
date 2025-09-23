import React from 'react'
import { motion } from 'framer-motion'

export default function Reveal({children, delay=0}){
  return (
    <motion.section initial={{opacity:0, y:20}} whileInView={{opacity:100, y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.6, delay}}>
      {children}
    </motion.section>
  )
}
