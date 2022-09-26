import Profil from "../../Components/Home/profile"
import Header from "../../Components/Home/Header"
import './Home.css'


const Home = ({id})=>{
return(
    <div className="home_container" id={id}>
        <Header/>
        <Profil/>
        <div className="home_footer">
      
        </div>
    </div>
)
}

export default Home