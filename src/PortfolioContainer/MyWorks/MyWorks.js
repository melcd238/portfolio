import './MyWorks.css'
import { useEffect } from 'react';
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import Carousel from '../../Components/MyWorks/Carousel';
import { motion } from 'framer-motion';



const MyWorks = ({id})=>{
    console.log(id)
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




    return(
        <div className="my-works-container fade-in"  id={id}>
             <div className="work-content">
            <ScreenTitle title="Mon travail" subtitle="Quelques projets personnels et projets de formation"/>
            <motion.div className='carousel-container'>
                <Carousel/>
            </motion.div>
            </div>  
        </div>

    )

}

export default MyWorks;