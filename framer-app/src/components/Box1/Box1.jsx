import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Box1() {
    const [isAnimating, setAnimate] = useState(false);

  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        animate={{
            x: isAnimating ? 600 : 0,
            opacity: isAnimating ? 1 : 0.5,
            rotate: isAnimating ? 360 : 0,
        }}
        initial={{
            opacity: 0.1,
        }}
        transition={{
            type: "spring",
            stiffness: 60,
            // damping: 1

        }}
        onClick={()=> setAnimate(!isAnimating)}
        >
            
        </motion.div>
    </div>
  )
}

export default Box1