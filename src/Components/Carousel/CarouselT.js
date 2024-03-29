import React, {useState} from 'react';
import './CarouselT.css';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';
import { RiDoubleQuotesL , RiDoubleQuotesR} from 'react-icons/ri';
import { BsDot } from 'react-icons/bs'

function Carousel({data}) {
  let iconStyles = { color: " #90028D", fontSize: "1.6em" };
  let quotesStyles = {color: " #90028D"}
  const [currentData, setCurrentData]= useState(data[0]);



  const HandlePrevPicture = (e) =>{
    let index = data.indexOf(currentData);
    let newIndex;
   if( index <= data.length -1){
      newIndex = --index;
    setCurrentData(data[newIndex])
     if(newIndex === -1){
        setCurrentData(data[data.length -1])
     }
   } 
    
 }

 const HandleNextPicture = (e) =>{
   let index = data.indexOf(currentData);
   if(index <= data.length -1){
       let newIndex = ++index;
       setCurrentData(data[newIndex])
       if(newIndex === data.length){
           newIndex = 0;
        setCurrentData(data[newIndex])
       }
   }
 }

 const dot = ()=>{
  let dotStyle = {color : " #90028D", fontSize: "50px" }
  let dotStyleActive =  {color : " rgba(35,38,59,0.5)", fontSize: "50px"}
  const checkIndex = (index)=>{
  return index === data.indexOf(currentData) ? dotStyle : dotStyleActive
}
  return(
   [...Array(3).keys()].map((index)=>{
       const dotStyles = checkIndex(index)
       return(
           <BsDot key={index} style={dotStyles} />
       )
   })
)
 
}


  return (
    <>
    <div className='carouselT-btn'><button onClick={(e)=>HandlePrevPicture(e)}><FaArrowAltCircleLeft style={iconStyles}/></button></div>
    <div className='carouselT-container'>
        <div className='carouselT-title'>
           <h2>{currentData.name}</h2>
           <p>{currentData.poste}</p>
           <div></div>
        </div>
        <div className='carouselT-avis'>
          <p><RiDoubleQuotesL style={quotesStyles}/>{currentData.avis}<RiDoubleQuotesR style={quotesStyles}/></p>
        </div>
        <div className='carouselT-qui'>
          <p>{currentData.qui}.</p>
          <p>Recommandation visible sur mon profil linkedin</p>
        </div>
        <div>{dot()}</div>
    </div>
     <div className='carouselT-btn'><button onClick = {(e)=> HandleNextPicture(e)}><FaArrowAltCircleRight style={iconStyles}/></button></div>
     </>
  )
}

export default Carousel