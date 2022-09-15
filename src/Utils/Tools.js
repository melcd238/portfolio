import Home from '../PortfolioContainer/Home/Home'
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import MyResume from '../PortfolioContainer/MyResume/MyResume';
import MyWorks from '../PortfolioContainer/MyWorks/MyWorks';
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe';
import Testimonials from '../PortfolioContainer/Testimonials/Testimonials';



export const TOTAL_SCREENS =[
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "MyResume",
        component: MyResume,
    },
    {
        screen_name: "MyWorks",
        component: MyWorks,
    },
    {   
        screen_name: "Testimonials",
        component: Testimonials,

    },
    {
        screen_name: "ContactMe",
        component: ContactMe,
    }

]

export const GET_SCREEN_INDEX =(screen_name)=>{
    if(!screen_name)return -1
    for(let i = 0 ; i < TOTAL_SCREENS.length ; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i
    }
    return -1
};


