import logo from './logo.svg';
import './App.css';
import './my.css';
import './new.css';
import './Tablet.css';
import './Mobile.css';
import './Mobsm.css';
import './Mob.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Layout from './Components/Layout';
import Shop from './Components/Shop';
import Women from './Components/Women';
import Mens from './Components/Mens';
import Header from './New_Components/Header';
import Nav from './New_Components/Nav';
import Main from './New_Components/Main';
import Footer from './New_Components/Footer';


function App() {
  return (
    <div className="">
      {/* <Navigation />
      <Home /> */}
      {/* <Layout/>
      <Shop/>
      <Women/>
      <Mens/> */}
          
     <Header/>
     <Nav/>
     <Main/>
     <Footer/>
     

    </div>
  );
}

export default App;
