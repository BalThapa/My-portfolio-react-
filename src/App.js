import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { DarkModeProvider, useDarkMode } from "./components/ui/DarkModeContext";


function AppContent() {
  const {darkMode} = useDarkMode();
  return (
    
     <div className={darkMode ? 'dark':''}>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     
     <Footer/>
     </div>
     
  );
}

function App () {
  return(
  <DarkModeProvider>
     <BrowserRouter>
     <AppContent/>
     </BrowserRouter>    
  </DarkModeProvider>
  )
}

export default App;
