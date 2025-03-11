import './styles/App.css';
import Header from './tsx-components/Header.tsx';
import Carousel from './tsx-components/Carousel.tsx';
function App() {
  return (
    <div className="App">
       <Header />  
       <Carousel />  {/* Rendering Carousel */}

    </div>
  );
}

export default App;
