import "./App.css";
import Contact from "./Component/Contact";
import Homepage from "./Component/Home";
// import Navbar from "./Component/Navbar";
// import Footer from "./Component/Contact/Footer";
import Services from "./Component/Services";

function App() {
  return (
    <div className="container mx-auto  ">
      <Homepage />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
