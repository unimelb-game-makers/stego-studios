import './styles/App.css';
import Header from './components/Header.tsx';
import Carousel from './components/Carousel.tsx';
function App() {
  return (
    <div className="App">
       <Header />  
       <Carousel />  {/* Rendering Carousel */}

    </div>
  );
}

export default App;
