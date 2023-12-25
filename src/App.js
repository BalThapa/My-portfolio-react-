import { useState } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const[darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
     <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
