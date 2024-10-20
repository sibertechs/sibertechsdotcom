import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Card1 from "./Components/Card1/Card1";
// import Card2 from "./Components/Card2/Card2";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Index from "./Pages/Home/Index";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import GetStarted from "./Components/GetStarted/GetStarted";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
      </Router>
    </div>

    // <div>
    //   <Navbar />
    //   <Card1 />
    //   <Card2 />
    //   <Footer />
    //   <Contact />
    // </div>
  );
}

export default App;
