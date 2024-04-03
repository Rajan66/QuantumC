import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
