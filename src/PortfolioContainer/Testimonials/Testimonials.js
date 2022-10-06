import React, { useEffect } from 'react';
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import ScrollService from '../../Utils/ScrollService';
import Animations from '../../Utils/Animations';
import './Testimonials.css';
import { testimonialsData } from './TestimonialsData';
import CarouselT from '../../Components/Carousel/CarouselT';

const Testimonials = ({id})=> {
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



  return (
    <div className="testimonials-container screen-container fade-in" id={id}>
        <div className="about-me-parent">
        <ScreenTitle title="Témoignages" subtitle="Avis et recommandations"/>
        <div className='testi-container'>
              <CarouselT data={testimonialsData}/>
        </div>
        </div>
    </div>
  )
}

export default Testimonials