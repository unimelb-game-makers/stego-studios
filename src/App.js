import './styles/App.css';
import Header from './tsx-components/Header.tsx';
import Carousel from './tsx-components/Carousel.tsx';
import ScrollingBanner from './tsx-components/ScrollingBanner.tsx';
import Showcase from './tsx-components/Showcase.tsx'; // Issue when importing this 
function App() {
  return (
    <div className="App">
       <Header />  
       <Carousel />  {/* Rendering Carousel */}
       <ScrollingBanner />
       <Showcase /> 

    </div>
  );
}

export default App;
