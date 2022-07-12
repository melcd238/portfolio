import './Card.css'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa"
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt ,FaNode } from "react-icons/fa";
import { SiFramer, SiReactrouter, SiRedux , SiMysql, SiSequelize, SiExpress, SiD3Dotjs} from "react-icons/si"

const Card = ({...project})=>{
    const { title , id, description, img , techno , lienGithub, url ,type } = project;
    let iconStyles = { color: " #90028D", fontSize: "1.6em" };
    let technoData = techno.map((data)=>{
        switch (data){
            case "react":
                return <FaReact key={data} style={iconStyles}/>
            case "framer-motion":
                    return <SiFramer key={data} style={iconStyles}/> 
            case "react-router":
                    return <SiReactrouter key={data} style={iconStyles}/>
            case "JS":
                    return <FaJsSquare key={data} style={iconStyles}/> 
            case "Html5":
                    return <FaHtml5 key={data} style={iconStyles}/> 
            case "css3":
                    return <FaCss3Alt key={data} style={iconStyles}/> 
            case "node":
                    return <FaNode key={data} style={iconStyles}/> 
            case "D3":
                     return <SiD3Dotjs key={data} style={iconStyles}/> 
            case "redux":
                        return <SiRedux key={data} style={iconStyles}/>  
            case "mySql":
                        return <SiMysql key={data} style={iconStyles}/> 
            case "sequelize":
                        return <SiSequelize key={data} style={iconStyles}/>   
            case "express":
                        return <SiExpress key={data} style={iconStyles}/>                                                                                       
            default :
                return ""    
        }
    })

    let githubStyle = {color : "#23263b" , fontSize: "1.6em"}
   
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
                    <a href={lienGithub} target="_blank" rel='noreferrer'><FaGithub style={githubStyle}/></a>
                    <a href={url} target="_blank" rel='noreferrer'> Visiter: {title}</a>
                </div>
                <div className='card-techno'>
                 
                 {technoData}
                </div>
            </div>
         
        </motion.div>
    )
}

export default Card