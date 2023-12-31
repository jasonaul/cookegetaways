import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './components/Map';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import NavBar2 from './components/NavBar2';
import StoweDescription from './components/StoweDescription';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<> <NavBar /><Home /></>} />
        <Route path='/overview' exact element={<><NavBar /><Overview /></>} />
        <Route path='/map' exact element={<><NavBar2 /><Map /><StoweDescription /></>} />
        <Route path='/gallery' exact element={<><NavBar2 /><Gallery /></>} />
        <Route path='/reviews' exact element={<><NavBar2 /><Reviews /></>} />
        <Route path='/contact' exact element={<><NavBar /><Contact /></>} />

        {/* Add your other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
