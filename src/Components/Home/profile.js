import React,{useState, useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import ScrollService from '../../Utils/ScrollService';
import melPicture from "../../Assets/avatar.png"
import "./profile.css";
import {quotes}  from './data/citations'




const Profil = ()=>{
    const [index, setIndex] = useState(null);
    const generate = () => { const index = Math.floor(Math.random() * quotes.length);
         setIndex(index);
         
     }; 

   useEffect(()=>{
     generate()
   },[])

    return(
        <>
        <div className="profil_container">
            <div className="profil_resume">
                <h1>👋 Je suis <span>Mélaïna Donati</span> 👋 </h1>
               <div className='profil_animation'>
                <TypeAnimation
                     cursor={false}
                     sequence={["Je suis développeuse React.js",3000, "Je suis motivée et déterminée",2000]}
                     wrapper="h2"
                     speed={10}
                     repeat={Infinity}/>
                </div>
                
                <div className='profil-desc'>
                  <p>Amoureuse de React.js et de son écosystème...</p>
                </div>

                <div className='profil_btn'>
                    <div><button className='btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>Me contacter</button></div>
                    <div>
                    <button className='btn'><a href="mdonatiCV.pdf" download="mdonatiCV.pdf">Mon CV</a></button>
                    </div>
                </div> 

                <div className='profil_social_media'>
                    <a href="https://www.linkedin.com/in/mela%C3%AFna-donati-1aa4081b0/" target="_blank" rel="noreferrer"><FaLinkedinIn style={{color:"white", fontSize:"30px"}}/></a>
                    <a href="https://github.com/melcd238" target="_blank" rel="noreferrer"><FaGithub style={{color:"white", fontSize:"30px"}}/></a>
                </div>   

            </div>


            <div className="profil_picture">
                <div className='profil_picture_border'>
                   <img src={melPicture} alt="profil de mel donati"></img>
                </div>
               
            </div>
        </div>
         { index !== null ? 
          <div className="citation_container">
          <q>  {quotes[index] && quotes[index].citation}</q> 
           <p>  {quotes[index] && quotes[index].auteur}</p>
          </div> 
          :
          null

         }
        </>
    )
}

export default Profil

