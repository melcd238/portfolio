import { TOTAL_SCREENS } from "../Utils/Tools";
import  {  ToastContainer  }  from  'react-toastify' ;
import  'react-toastify/dist/ReactToastify.css' ;



const PortfolioConatiner = ()=>{
    const mapAllScreens = ()=>{
        return TOTAL_SCREENS.map((screen)=>
        screen.component ? (
            <screen.component
            screenName = {screen.screen_name}
            key= {screen.screen_name}
            id = {screen.screen_name}/>) : ( <div key={screen.screen_name}></div>)
        )
    };

    return <div> {mapAllScreens()}
                <ToastContainer />
          </div>

}

export default PortfolioConatiner;