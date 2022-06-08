import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
