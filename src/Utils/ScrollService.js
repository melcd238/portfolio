import { TOTAL_SCREENS } from "./Tools";
import { Subject } from "rxjs";




export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();

    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }
    scrollToContactMe = ()=>{
        let contactMeScreen = document.getElementById("ContactMe")
        if(!contactMeScreen)return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})

    }
    scrollToHome = ()=>{
        let HomeScreen = document.getElementById("Home")
        if(!HomeScreen)return;
        HomeScreen.scrollIntoView({behavior: "smooth"})

    }
    isEltInView = (elt, type)=>{
        let rec = elt.getBoundingClientRect();
        let eltTop = rec.top;
        let eltBottom = rec.bottom;
        let partialVisible = eltTop < window.innerHeight && eltBottom >= 0;
        let totalyVisible = eltTop >=0 && eltBottom <= window.innerHeight;

        switch(type){
            case "partial":
                return partialVisible;
            case "total":
                return totalyVisible;
            default:
                return false        
        }
    }

    checkCurrentScreenUnderViewport = (event)=>{
        
        if(!event || Object.keys(event).length < 1)return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDom = document.getElementById(screen.screen_name);
            if(!screenFromDom)
            continue;
            let fullyVisible = this.isEltInView(screenFromDom , "total");
            let partiallyVisible = this.isEltInView(screenFromDom, "partial");

            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen : screen.screen_name
                    });
                    screen["alreadyRendered"] = true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView : screen.screen_name
                    });
                    
                    break;
                }
            }
        }
    }

}

