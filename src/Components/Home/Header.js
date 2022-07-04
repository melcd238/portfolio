import "./Header.css"
import { FaBars } from 'react-icons/fa'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../Utils/Tools'
import ScrollService from '../../Utils/ScrollService'
import { useState } from "react"


const Header = ()=>{
    const [selectedScreen , setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)


    const updateCurrentscreen = (currentScreen)=>{
        if(!currentScreen || !currentScreen.screenInView) return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0)return
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentscreen)

    const getHeaderOptions = ()=>{
        return(
            TOTAL_SCREENS.map((screen, i)=>(
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }
    const getHeaderOptionsClass =(index)=>{
        let classes = "header-option";
        if(index < TOTAL_SCREENS.length - 1) 
        classes += "selected-header-seperator";

        if(selectedScreen === index) classes += "selected-header-option";
        return

    }
    const switchScreen = (index, screen)=>{
        let screenComponent = document.getElementById(screen.screen_name)
        if(!screenComponent)return;
        screenComponent.scrollIntoView({behavior:"smooth"})
        setSelectedScreen(index)
        setShowHeaderOptions(false);

    }


    return(
        <header>
         <div className="header-container" onClick={()=> setShowHeaderOptions(!showHeaderOptions)}>
             <div className="header-parent">
                 <div className="header-hamburger" onClick={()=> setShowHeaderOptions(!showHeaderOptions) }>
                     <FaBars className="header-hamburger-bars"/>
                </div>
                <div className="header-logo">
                     <span>MelPortfolio</span>
                </div>
                <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>{getHeaderOptions()}</div>
             </div>
         </div>
        </header>
    )

}

export default Header;