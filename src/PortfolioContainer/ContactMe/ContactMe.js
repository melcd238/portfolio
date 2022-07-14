import "./ContactMe.css"
import { useEffect } from 'react';
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import logo from '../../Assets/logoP.png';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import email from "../../Assets/pexelEmail.jpg"
import { BiMailSend } from "react-icons/bi"


const ContactMe =({id})=>{

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== id){
            return Animations.animations.fadeInScreen(id)
        }
    }

    const fadeInSub = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    useEffect(() => {
        return () => {
          fadeInSub.unsubscribe();
        };
      }, [fadeInSub]);

    return(
        <div className="contact-container" id={id}>
             <ScreenTitle title="Contact Me" subtitle="Restons en contact !!"/>
             <div className="contact-content">
                     <div className="contact-form-container">
                         <div className="contact-mail"> 
                             <img src={email} alt="Pexel email"></img>
                             <p>Au plaisir de vous lire... 📧  !</p>
                         </div>
                         <div className="contact-form">
                             <div className="form-content">
                                 <form className="form">
                                 <label htmlFor="name">Nom</label>
                                 <input type="text"/>
                                 <label htmlFor="name">Email</label>
                                 <input type="email"/>
                                 <label htmlFor="name">Message</label>
                                 <textarea type="text"/>
                                 <button type="submit">Envoyer <span><BiMailSend/></span></button>
                                 </form>
                             </div>

                         </div>
                     </div>
             </div>
             <footer className="footer-container">
               <div className="imgContainer">
                  <img src={logo} alt="Logo de Mélaïna Donati"></img> 
               </div>
               <p className="copyRights">©2022 - Réalisé par Mélaïna Donati - Tous droits réservés. </p>
               <div className="footer-social">
                    <a href="https://www.linkedin.com/in/mel-donati-1aa4081b0/" target="_blank" rel="noreferrer"><FaLinkedinIn style={{color:"white", fontSize:"30px"}}/></a>
                    <a href="https://github.com/melcd238" target="_blank" rel="noreferrer"><FaGithub style={{color:"white", fontSize:"30px"}}/></a>
               </div>
             </footer>
        </div>
    )
}


export default ContactMe;