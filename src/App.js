import logo from './logo.svg';
import './App.css';
import './my.css';
import './new.css';
import './Tablet.css';
import './Mobile.css';
import './Mobsm.css';
import './Mob.css';
import './Blog_css/Blog.css';
import './Blog_css/Blog_Tablet.css';
import './Blog_css/Blog_Mob1.css';
import './Blog_css/Blog_Mob2.css';
import './Blog_css/Blog_Mob3.css';
import './Gallery_css/Gallery.css';
import './About_css/About.css';
import './Customer_css/Customer.css';
import './Customer_css/Customer_Tablet.css';
import './Customer_css/Customer_mob1.css';
import './Customer_css/Customer_mob2.css';
import './Customer_css/Customer_mob3.css';
import './Gallery_css/Gallery_Tablet.css';
import './Gallery_css/Mob1.css';
import './Gallery_css/Mob2.css';
import './Gallery_css/Mob3.css';
import './About_css/Tablet2.css';
import './About_css/Mob11.css';
import './About_css/Mob22.css';
import './About_css/Mob33.css';

import Home from './Components/Home';
import Main from './New_Components/Main';
import Blog_Home from './Blog_Components/Blog_Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery_Components/Gallery';
import About from './About_Components/About';
import Customer from './Customer_Components/Customer';


function App() {
  return (
    <div className="">

      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/homev1' element={<Main />}></Route>
          <Route path='/blog' element={<Blog_Home />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/aboutus' element={<About />}></Route>
          <Route path='/customer' element={<Customer />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
