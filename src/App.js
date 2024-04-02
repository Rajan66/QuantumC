import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
