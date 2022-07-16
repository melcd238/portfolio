import "./AboutMe.css";
import { useEffect } from "react";
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle';
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import AboutIMG from '../../Assets/aboutMe.jpg';
import BtnScroll from '../../Components/BtnScroll/BtnScroll';




const AboutMe= ({id})=>{
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== id){
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
        <div className="about-me-container screen-container" id={id || ""}>
            <div className="about-me-parent">
                <ScreenTitle title="About Me" subtitle="Pourquoi me choisir?"/>
                <div className="about-me-card">
                   <div className="about-me-profile">
                       <img src={AboutIMG} alt="about me"></img>
                   </div>
                   <div className="about-me-details">
                   <div className="about-me-trait"></div>
                        <p>Après une carrière comme chirurgien dentiste et des problèmes de santé m'empêchant d'exercer, c'est tout naturellement que je me suis tournée vers
                            une reconversion dans le développement web. Je souhaite continuer à rendre service et faire en sorte que mes mains soient le prolongement de mon cerveau
                            mais d'une manière différente. J'ai ainsi validé une première formation de développeuse web chez OpenClassrooms. Ayant à coeur de sans cesse progresser et apprendre,
                            j'ai pousuivi ma formation de développeuse d'application Javascript - React.js.<br/>
                            Trouver des solutions aux problèmes posés a toujours fait partie de ma vie, que ce soit en tant 
                             que dentiste ou en tant que développeuse. C'est le moteur de mon épanouissement:
                            .... et quelle sensation géniale que de ressentir la montée d'adrénaline, de joie et de fierté à l'aboutissement d'un projet.
                            Ayant une appétence pour le Frontend , je suis  passionnée  par React.js et son écosystème mais le backend ne reste jamais loin non plus.
                            Les méandres de la vie m'ont appris à croire en moi:  même dans les situations qui semblent perdues, je reste positive.<br/> 
                            Aguerrie à la communication, je sais travailler en équipe, être force de propositions et n'attend plus qu'une équipe pour continuer à apprendre auprès de mon (mes) Yoda(s).<br/>
                            La vie professionnelle n'étant qu'une partie d'un tout, je puise mon énergie au sein de ma famille, de la musique, et mon oxygène en montagne, dès que je le peux,
                            été comme hiver.<br/>
                            Si mon profil attire votre curiosité, n'hésitez pas à me contacter...
                        </p>
                        <div className="about-me-trait"></div>
                        <div><button className='btn' onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>Me contacter</button></div>
                   </div>
                </div>
            </div>
              <BtnScroll/>
        </div>
    )
}

export default AboutMe