import logo from './logo.svg';
import './App.css';
import './my.css';
import './new.css';
import './Tablet.css';
import './Mobile.css';
import './Mobsm.css';
import './Mob.css';
import './Blog_css/Blog.css'
import './Gallery_css/Gallery.css'
import './About_css/About.css'
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
import Blog_Header from './Blog_Components/Blog_Header';
import Blog_Navigation from './Blog_Components/Blog_Navigation';
import Blog_Home from './Blog_Components/Blog_Home';
import Blog_Footer from './Blog_Components/Blog_Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery_Components/Gallery';
import About from './About_Components/About';


function App() {
  return (
    <div className="">

      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/homev1' element={<Main/>}></Route>
          <Route path='/homev2' element={<Blog_Home/>}></Route>
          <Route path='/homev3' element={<Gallery/>}></Route>
          <Route path='/homev4' element={<About/>}></Route>
     

        </Routes>
      </BrowserRouter>




     

    </div>
  );
}

export default App;
