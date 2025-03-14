import './styles/App.css';
import Header from './tsx-components/Header.tsx';
import Carousel from './tsx-components/Carousel.tsx';
import ScrollingBanner from './tsx-components/ScrollingBanner.tsx';
function App() {
  return (
    <div className="App">
       <Header />  
       <Carousel />  {/* Rendering Carousel */}
       <ScrollingBanner />

    </div>
  );
}

export default App;
