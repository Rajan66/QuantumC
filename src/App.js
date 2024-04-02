import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Works from "./components/Works";
import Aboutus from "./components/Aboutus";
import Inquiry from "./components/Inquiry";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Works />
      <Aboutus />
      <Inquiry />
      <Footer />
    </div>
  );
}

export default App;
