import './MyWorks.css'
import { useEffect } from 'react';
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import Carousel from '../../Components/MyWorks/Carousel';
import { motion } from 'framer-motion';
import BtnScroll from '../../Components/BtnScroll/BtnScroll'


const MyWorks = ({id})=>{
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
        <div id={id} className="my-works-container">
            <ScreenTitle title="My Works" subtitle="Quelques projets personnels et projets de formation"/>
            <motion.div className='carousel-container'>
                <Carousel/>
                <BtnScroll/>
            </motion.div>
            
        </div>

    )

}

export default MyWorks;