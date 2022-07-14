import './BtnScroll.css'
import ScrollService from '../../Utils/ScrollService';
import {FaArrowUp} from 'react-icons/fa'

const BtnScroll = ()=>{
    return(
        <div className='btn-scroll-container'>
            <button className='btn-scroll' onClick={() => ScrollService.scrollHandler.scrollToHome()} >
                <FaArrowUp className="btn-arrow"/>
            </button>

        </div>
    )
}




export default BtnScroll;