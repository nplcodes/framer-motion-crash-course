import { motion } from "framer-motion";

export default function TextMotion() {
  return (
    <div>
        <motion.h1

        animate={{
            x: [0,900, 0]
        }}
        transition={{
            duration: 2,
            delay: 1
        }}
        whileHover={{
            scale: 0.9,
            opacity: 0.2
        }}

        >
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
        </motion.h1>
    </div>
  )
}
