import './Card.css'
import { motion } from 'framer-motion'

const Card = ()=>{
    return(
        <motion.div className='card-container' whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}>
        card
        </motion.div>
    )
}

export default Card