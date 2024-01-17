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
import './Mens_css/Mens.css';
import './Mens_css/Men_Tablet.css';
import './Mens_css/Men_Mob2.css';
import './Mens_css/Men_Mob1.css';
import './Mens_css/Men_Mob3.css';
import './Brand_css/Brand.css';
import './Brand_css/Brandv2_Tablet.css';
import './New_Brand_css/New_Brand.css';
import './New_Home_css/New_Home.css';
import './New_Home_css/New_Tablet.css';
import './New_Home_css/New_Large.css';
import './New_Home_css/New_Medium.css';
import './New_Home_css/New_Small.css';
import './Coming_css/Coming.css'
import './Error_css/Error.css'
import Home from './Components/Home';
import Main from './New_Components/Main';
import Blog_Home from './Blog_Components/Blog_Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery_Components/Gallery';
import About from './About_Components/About';
import Customer from './Customer_Components/Customer';
import New_Home from './Components/New_Home';
import N_Mens from './New_Mens Components/N_Mens';
import Brand_v2 from './Brand_v2/Brand_v2';
import New_Brand from './New_Brand_Component/New_Brand';
import Coming from './Coming_Components/Coming';
import Error from './Error_page_Components/Error';

function App() {
  return (
    <div className="check">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<New_Home />}></Route>
          <Route path='/homev1' element={<Main />}></Route>
          <Route path='/blog' element={<Blog_Home />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/aboutus' element={<About />}></Route>
          <Route path='/customer' element={<Customer />}></Route>
          <Route path='/mens' element={<N_Mens />}></Route>
          <Route path='/brandv2' element={<Brand_v2/>}></Route>
          <Route path='/brand' element={<New_Brand/>}></Route>
          <Route path='/coming' element={<Coming/>}></Route>
          <Route path='/error' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
