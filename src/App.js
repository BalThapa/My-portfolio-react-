import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
//import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
     <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
