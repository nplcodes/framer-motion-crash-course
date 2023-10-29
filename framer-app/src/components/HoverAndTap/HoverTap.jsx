import React, { useState } from 'react'
import { motion } from 'framer-motion'

function HoverTap() {
  const [showCard, setShowcard]= useState(false)
  return (
    <div className='hover-tap'>
      <motion.div
        className='box-to-tap-and-hover'
        whileHover={{
          scale: 1.1
        }}
        transition={{
            duration: 1,
            type: "spring"
        }}
        layout
        onClick={()=> setShowcard(!showCard)}
      >
        <motion.h3>Hover or click</motion.h3>
        {showCard && (
          <motion.p 
          className='paragraph'
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
              duration: 1,
              type: "spring"
            }}
          >
            When a new component is added that has a layoutId prop that matches an existing component, it will automatically animate out from the old component.
          </motion.p>
        )}

      </motion.div>
    </div>
  )
}

export default HoverTap