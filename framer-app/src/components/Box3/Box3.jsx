import {motion} from 'framer-motion'

function Box3() { 

    // const boxvariant = {
    //     lion: {
    //         x: 100,
    //         scale: 1.5,
    //         backgroundColor: "yellow"
    //     },
    //     elephant: {
    //         x: 1000,
    //         scale: 0.3
    //     }
    // }


    const listVariant = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren",

            }
        }
    }

    const subBoxVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 2,

            }
        }
    }
    


  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        variants={listVariant}
        animate="visible"
        initial='hidden'
        >
         {[1,2,3].map(box =>{
            return <motion.li 
            className='boxItems'
            variants={subBoxVariant}
            animate="visible"
            initial='hidden'
            ></motion.li>
         })}
        
        </motion.div>
    </div>
  )
}

export default Box3