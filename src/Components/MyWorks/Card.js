import './Card.css'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa"

const Card = ({...project})=>{
    const { title , id, description, img , techno , lienGithub, url ,type } = project;
    
   
    return(
        <motion.div className='card-container' whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }} id={id}>
            <div className='card-img' style={{backgroundImage: `url(${img})`}}>
              <h1 className='card-title'>{title}</h1>
            </div>
            <div className='card-desc'>
                <h2>{type}</h2>
                <p>{description}</p>
                <div className='card-lien'>
                    <a href={lienGithub} target="_blank" rel='noreferrer'><FaGithub/></a>
                    <a href={url} target="_blank" rel='noreferrer'> Visiter: {title}</a>
                </div>
                <div className='card-techno'>
               
                </div>
            </div>
         
        </motion.div>
    )
}

export default Card