import React from 'react';
import './BtnScroll.css';
import {FaArrowUp} from 'react-icons/fa';
import ScrollService from '../../Utils/ScrollService';

const BtnScroll = ()=>{
   

    return(
        <>
         
            <button className='btn-scroll' onClick={() => ScrollService.scrollHandler.scrollToHome()} >
                <FaArrowUp className="btn-arrow"/>
            </button>
       
       </>
    )
}




export default BtnScroll;