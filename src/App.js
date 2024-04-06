import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from "./pages/Aboutus"
import Services from "./pages/Services";
import Inquiry from "./components/Inquiry";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
        </Routes>
        <Inquiry />
      </Router>
     
      <Footer />
    </div>
  );
}

export default App;
