import './MyResume.css';
import { useEffect, useState } from 'react';
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import MyResumeHeading from '../../Components/MyResumeHeading/MyResumeHeading'
import { resumeBullets , programmingSkillsDetails, mySoftSkills } from './MyResumeData'
import BtnScroll from '../../Components/BtnScroll/BtnScroll'



const MyResume = ({id})=>{
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [offSetStyle, setOffSetStyle] = useState({})

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



      const resumeDetails = [
        <div className="resume-screen-container" key="education">
          <MyResumeHeading
            heading={"OpenClassRooms"}
            subHeading={"RNCP niveau 6 Développeuse d'application - JavaScript React.JS"}
            fromDate={"2021"}
            toDate={"2022"}
          />
    
          <MyResumeHeading
            heading={"OpenClassRooms"}
            subHeading={"RNCP niveau 5 Développeuse Web"}
            fromDate={"2020"}
            toDate={"2021"}
          />
          <MyResumeHeading
            heading={"Université d'Odontologie Bordeaux 2"}
            subHeading={"Doctorat odontologie"}
            fromDate={"2002"}
            toDate={"2008"}
          />
        </div>,
    
        /* WORK EXPERIENCE */
        <div className="resume-screen-container programming-skills-container" key="work-experience">
          <div className="experience-container">
              <div className='experience-container-one'>
            <MyResumeHeading
              heading={"Divers projets personnels et projets de formation"}
              subHeading={"FULL STACK ET REACT DEVELOPPEUSE"}
              fromDate={"2020"}
              toDate={"En cours"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
                Création de site et d'application web
              </span>
            </div>
            <div className="experience-description">
              <span className="resume-description-text">
              Réalisation d'application web et optimisation des interfaces.
              Tester et corriger le code si c’est nécessaire.
              Produire une documentation technique et fonctionnelle.
              </span>
              <br />
            </div>
            </div>
            <div className='experience-container-one'>
            <MyResumeHeading
              heading={"SCM Donati-viant"}
              subHeading={"CHIRURGIEN DENTISTE"}
              fromDate={"2008"}
              toDate={"2021"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
              Traitement, prise en charge et soin de patients.
              Encadrement et accompagnement du personnel, animation des
              réunions de travail, répartition des missions.
              </span>
            </div>
            </div>
          </div>
        </div>,
    
        /* PROGRAMMING SKILLS */
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
            </div>
          ))}
        </div>,
    
        /* soft skills */
        <div
        className="resume-screen-container programming-skills-container"
        key="soft-skills"
      >
        {mySoftSkills.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
          </div>
        ))}
      </div>
      ,
    
        /* Interests */
        <div className="resume-screen-container programming-skills-container" key="interests">
          <MyResumeHeading
            heading="Batterie"
            description="Après une journée à coder,c'est toujours un plaisir de se défouler à la batterie en gardant le rythme."
          />
          <MyResumeHeading
            heading="Montagne"
            description="Que ce soit pour la raondonnée ou pour le sport d'hivers, c'est une vrai bouffée d'oxygène."
          />
          <MyResumeHeading
            heading="Voyages"
            description="Découvrir d'autres cultures est toujours enrichissant."
          />
           <MyResumeHeading
            heading="Les Jeux Olympiques"
            description="Une passion pour le sport et le dépassement de soit des athlètes. Pourvoyeurs de grandes émotions."
          />
        </div>,
      ];

      const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
    
      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
              alt="B"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
    
      const getResumeScreens = () => {
        return (
          <div
            style={offSetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };
    




    return(
        <div className="resume-container screen-container fade-in" id={id || ""}>
            <div className="resume-content">
              <ScreenTitle title="Resume" subtitle="Quelques détails" />
              <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
            </div>
           <BtnScroll/>
        </div>
    )
}

export default MyResume;