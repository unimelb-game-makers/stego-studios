import './styles/App.css';
import Header from './tsx-components/Header.tsx';
import Carousel from './tsx-components/Carousel.tsx';
import ScrollingBanner from './tsx-components/ScrollingBanner.tsx';
import Showcase from './tsx-components/Showcase.tsx'; // Issue when importing this 
import Footer from './tsx-components/Footer.tsx';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Allgames from './routes/Allgames.tsx';
import CreatureArk from "./routes/Creatureark.tsx";
import CreepyCook from "./routes/Creepycook.tsx";
import Trackline from "./routes/Trackline.tsx";

import Navbar from './tsx-components/Nav.tsx';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Header />  

       {/* <Navbar /> */}
      <Routes>
        <Route path="/allgames" element={<Allgames/>} />
      </Routes>
      </BrowserRouter>
       <Carousel />  {/* Rendering Carousel */}
       
       <ScrollingBanner />
       <Showcase /> 

     
       <Footer />
      
     
      
      
      
    </div>
  );
}

export default App;
