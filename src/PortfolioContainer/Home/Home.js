import Profil from "../../Components/Home/profile"
import Header from "../../Components/Home/Header"
import './Home.css'
import footer from '../../Assets/Background/shape-bg.png'

const Home = ()=>{
return(
    <div className="home_container">
        <Header/>
        <Profil/>
        <div className="home_footer">
         <img src={footer} alt="footer de la page home"></img>
        </div>
    </div>
)
}

export default Home