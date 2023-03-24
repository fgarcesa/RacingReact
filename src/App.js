import './styles/App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/RacingReact" element={<Home/>}/>
          <Route exact path="/resultados" element={<Results/>}/>
          <Route exact path="/sobremi" element={<About/>}/>
          <Route exact path="/contacto" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
