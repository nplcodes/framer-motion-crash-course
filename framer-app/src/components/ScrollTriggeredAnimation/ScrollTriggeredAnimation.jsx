import React from 'react'
import { motion } from 'framer-motion'

function ScrollTriggeredAnimation() {
  return (
    <div style={
        {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h2>React Scroll Triggered Animation framer motion</h2>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
    </div>
  )
}

export default ScrollTriggeredAnimation

function Box() {
    return(
        <motion.div
          className='scrollTriggered'
          initial={{opacity: 0, scale: 0, x: 500}}
          whileInView={{opacity: 1, scale: 1.2, x:0}}
          transition={{duration: 0.6}}
        //   viewport={{once: true}}
        >
        </motion.div>
    )
    
}