import "./AboutMe.css";
import { useEffect } from "react";
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle';
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import AboutIMG from '../../Assets/aboutMe.jpg';





const AboutMe= ({id})=>{
    console.log(id)
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== id){
            return Animations.animations.fadeInScreen(id)
        }
    }

    const fadeInSub = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    useEffect(() => {
        return () => {
          fadeInSub.unsubscribe();
        };
      }, [fadeInSub]);

    return(
        <div className="about-me-container screen-container fade-in" id={id || ""}>
            <div className="about-me-parent">
                <ScreenTitle title="A mon sujet" subtitle="Pourquoi me choisir?"/>
                <div className="about-me-card">
                   <div className="about-me-profile">
                       <img src={AboutIMG} alt="about me"></img>
                   </div>
                   <div className="about-me-details">
                   <div className="about-me-trait"></div>
                        <p> Après une carrière comme chirurgien dentiste et souhaitant continuer à rendre service 
                             c'est tout naturellement que je me suis tournée vers
                            une reconversion dans le développement web. 
                            J'ai ainsi validé une première formation de développeuse web chez OpenClassrooms.</p>

                            <p style={{paddingTop: "10px"}}> Ayant à coeur de sans cesse progresser et apprendre,
                            j'ai pousuivi sur la formation de développeuse d'application Javascript - React.js toujours chez OpenClassrooms.</p>

                           <p style={{paddingTop: "10px"}}> Trouver des solutions aux problèmes posés a toujours fait partie de ma vie, que ce soit en tant 
                             que dentiste ou en tant que développeuse. C'est le moteur de mon épanouissement:
                            .... et quelle sensation géniale que de ressentir la montée d'adrénaline, de joie et de fierté à l'aboutissement d'un projet.</p>

                           <p style={{paddingTop: "10px"}}> Ayant une appétence pour le Frontend , je suis  passionnée  par React.js et son écosystème.
                            Les méandres de la vie m'ont appris à croire en moi:  même dans les situations qui semblent perdues, je reste positive.<br/> 
                            Aguerrie à la communication, je sais travailler en équipe, être force de propositions et n'attend plus qu'une équipe pour continuer à apprendre auprès de mon (mes) Yoda(s).<br/>
                            La vie professionnelle n'étant qu'une partie d'un tout, je puise mon énergie au sein de ma famille, de la musique et mon oxygène en montagne, dès que je le peux,
                            été comme hiver.</p>

                           <p style={{paddingTop: "10px"}}>Si mon profil attire votre curiosité, n'hésitez pas à me contacter...</p> 
                       
                        <div className="about-me-trait"></div>
                        <div><button className='btn-aboutMe' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>Me contacter</button></div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe