import Profil from "../../Components/Home/profile"
import Header from "../../Components/Home/Header"
import './Home.css'
import footer from '../../Assets/Background/shape-bg.png'

const Home = ({id})=>{
return(
    <div className="home_container" id={id}>
        <Header/>
        <Profil/>
        <div className="home_footer">
         <img src={footer} alt="footer de la page home"></img>
        </div>
    </div>
)
}

export default Home