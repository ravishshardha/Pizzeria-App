import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
//These router help to go from one page to other
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/menu" element={<Menu />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
