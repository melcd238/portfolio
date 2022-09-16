import "./ContactMe.css"
import React , { useEffect, useRef} from 'react';
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import logo from '../../Assets/logoP.png';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import email from "../../Assets/pexelEmail.jpg"
import { BiMailSend } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import ReCAPTCHA  from  'react-google-recaptcha';




const ContactMe =({id})=>{
    const recaptchaRef = useRef();
    
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== id){
            return Animations.animations.fadeInScreen(id)
        }
    }

    const fadeInSub = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    useEffect(() => {
        return () => {
          fadeInSub.unsubscribe();
        };
      }, [fadeInSub]);



     const SendEmailWithReCAPTCHA = async (object) => {
        const token = await recaptchaRef.current.executeAsync();
        if(token ){
            const params = {
                ...object,
                'g-recaptcha-response': token
            }
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE,process.env.REACT_APP_EMAILJS_TEMPLATE , params, process.env.REACT_APP_EMAILJS_USERID)
            .then((result) => {
                console.log(result.text)
                if(result.text){
                    ScrollService.scrollHandler.scrollToHome();
                }
            }, (error) => {
                console.log(error.text)
                if(error.text){
                    alert("Oups!! un problème est survenu!!")
                }
            })
            
        }
       
    }
    

    return(
        <div className="contact-container fade-in" id={id}>
             <ScreenTitle title="Me contacter" subtitle="Restons en contact !!"/>
             <div className="contact-content">
                     <div className="contact-form-container">
                         <div className="contact-mail"> 
                             <img src={email} alt="Pexel email"></img>
                             <p>Au plaisir de vous lire... 📧  !</p>
                         </div>
                         <div className="contact-form">
                             <div className="form-content">
                                 <Formik initialValues={{ name: '', email: '', message:""}}
                                  validationSchema={yup.object({
                                    name:yup.string()
                                     .required("Nom attendu")
                                     .matches(/^[aA-zZ\s]+$/, 'Utiliser un nom valide')
                                     .min (2, "Trop court!")
                                     .max(50, "Trop long!"),  
                                    email:yup.string()
                                       .required("Email attendu!")
                                       .email('Doit être un email.'),
                                    message:yup.string()
                                       .required("Message attendu!") 
                                       .min (10, "Trop court!"),  
                                  })}
                                  onSubmit={(values, { setSubmitting, resetForm }) => {
                                    SendEmailWithReCAPTCHA(values)
                                   setSubmitting(false)
                                   resetForm({
                                    values: {
                                      name: '',
                                      email: '',
                                      message: '',
                                    }})
                                   
                                  }}>
                                  {({ isSubmitting }) => (
                                 <Form className="form">

                                 <label htmlFor="name">Nom</label>
                                 <Field className="input" type="text" id="name" name="name" required/>
                                 <ErrorMessage name="name" component="div" style={{color: "red"}} className="error-message" />

                                 <label htmlFor="email">Email</label>
                                 <Field className="input" type="email" id="email" name="email" required/>
                                 <ErrorMessage name="email" component="div" style={{color: "red"}} />

                                 <label htmlFor="message">Message</label>
                                 <Field className="textarea"type="text" id="message" name="message" required/>
                                 <ErrorMessage name="message" component="div" style={{color: "red"}} />

                                 <ReCAPTCHA sitekey={process.env.REACT_APP_EMAILJS_reCAPTCHA} 
                                            size="invisible" 
                                            badge="inline" 
                                            ref={recaptchaRef} />
                            

                                 <button type="submit" disabled={isSubmitting}>Envoyer <span><BiMailSend/></span></button>
                                 </Form>
                                  )}
                                 </Formik>
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
                    <a href="https://www.linkedin.com/in/mela%C3%AFna-donati-1aa4081b0/" target="_blank" rel="noreferrer"><FaLinkedinIn style={{color:"white", fontSize:"30px"}}/></a>
                    <a href="https://github.com/melcd238" target="_blank" rel="noreferrer"><FaGithub style={{color:"white", fontSize:"30px"}}/></a>
               </div>
             </footer>
            
        </div>
    )
}


export default ContactMe;