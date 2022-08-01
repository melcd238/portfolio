import React, {Suspense} from 'react';
import TypeAnimation from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import ScrollService from '../../Utils/ScrollService';
import "./profile.css";
import { Canvas } from '@react-three/fiber';
import BoxProfile from './BoxProfile';

import { OrbitControls } from '@react-three/drei';

const Profil = ()=>{
    return(
        <>
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


            <Canvas className="profil_picture" style={{height:"340px"}}>
               <OrbitControls enableZoom={false}/>
               <ambientLight intensity={0.5}/>
               <directionalLight position={[-2, 5, 2]} intensity={1}/>
               <Suspense fallback={null}>
               <BoxProfile/>
               </Suspense>
            </Canvas>
            
        </div>
        <q>Oser ouvrir une porte demande parfois du courage. La franchir et continuer son chemin demande de la résilience.</q> 
        </>
    )
}

export default Profil