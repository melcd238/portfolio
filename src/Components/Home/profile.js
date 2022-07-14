import TypeAnimation from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import melPicture from '../../Assets/melProfil.jpg';
import ScrollService from '../../Utils/ScrollService';
import "./profile.css"

const Profil = ()=>{
    return(
        <div className="profil_container">
            <div className="profil_resume">
                <h1>👋 Je suis <span>Mélaïna Donati</span> 👋 </h1>
               <div className='profil_animation'>
                <TypeAnimation
                     cursor={false}
                     sequence={["Développeuse d'application React.js", 2000, "Développeuse MERN 💻  ", 2000, "Enthousiaste et ultra motivée 😄",2000]}
                     wrapper="h2"
                     repeat={Infinity}/>
                </div>
                
                <div className='profil-desc'>
                  <p>Amoureuse de React.js et de son ecosystème...</p>
                  <p>J'apprécie aussi construire des applications MERN</p> 

                </div>

                <div className='profil_btn'>
                    <div><button className='btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>Me contacter</button></div>
                    <div>
                    <button className='btn'><a href="mdonatiCV.pdf" download="mdonatiCV.pdf">Mon CV</a></button>
                    </div>
                </div> 

                <div className='profil_social_media'>
                    <a href="https://www.linkedin.com/in/mel-donati-1aa4081b0/" target="_blank" rel="noreferrer"><FaLinkedinIn style={{color:"white", fontSize:"30px"}}/></a>
                    <a href="https://github.com/melcd238" target="_blank" rel="noreferrer"><FaGithub style={{color:"white", fontSize:"30px"}}/></a>
                </div>   

            </div>
            <div className="profil_picture">
                <div className='profil_picture_border'>
                   <img src={melPicture} alt="profil de mel donati"></img>
                </div>

            </div>
        
        </div>
    )
}

export default Profil