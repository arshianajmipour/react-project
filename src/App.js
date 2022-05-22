import React from "react";
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import Home from './Home/Home.js';
import About from "./About/about.js";
import News from "./News/News.js";
import Contact from "./Contact/contect.js";
function App() {
  return (
<div className="page">
     <Header/>
     <BrowserRouter >
         <Routes >
             <Route exact path="/react-project/" element={<Home/>}/>
             <Route exact path="react-project/Contact" element={<Contact/>}/>
             <Route  path="react-project/About" element={<About/>}/>
             <Route exact path="react-project/News" element={<News/>}/>
         </Routes>
     </BrowserRouter>
     <Footer/>
</div>
  );
}

export default App;
