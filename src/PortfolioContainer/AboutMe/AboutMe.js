import "./AboutMe.css";
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle';
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import AboutIMG from '../../Assets/aboutMe.jpg';



const AboutMe= ({id})=>{
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== id){
            return Animations.animations.fadeInScreen(id)
        }
    }

    const fadeInSub = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                             text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="about-me-trait"></div>
                   </div>
                </div>
            </div>
      
        </div>
    )
}

export default AboutMe