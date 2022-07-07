import './Carousel.css'
import Card from './Card'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'


const Carousel = ()=>{
    const [width, setWidth]= useState(0)
    const carouselRef = useRef()

    useEffect(()=>{
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[])

    return(
        <motion.div ref={carouselRef}  className='carousel'>
            <motion.div className='inner-carousel' drag="x" dragConstraints={{left: - width, right: width}}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              </motion.div>
              
        </motion.div>
    )
}

export default Carousel