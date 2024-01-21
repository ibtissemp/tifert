 import React from "react";
 import { ReactDOM } from "react";
 import Auth from './fin/Auth';
import Footer  from'./fin/Footer';
 import Inscrit from './fin/Inscrit';
 import Unite1 from "./fin/Unite1";
 import Unite4 from "./fin/Unite4";

 import Unite3 from "./fin/Unite3";
 import Unite5 from "./fin/Unite5";
 import Unite2 from "./fin/Unite2";
 import Tks from "./fin/Tks";
 import RejetHydrique from "./fin/RejetHydrique"
import Navbar from "./fin/Navbar";

 import Suivant from "./fin/Suivant";
 import Suivant1 from "./fin/Suivant1";
 import Verification from "./fin/Verification.js";
import "./style.css"

import { Routes, Route} from 'react-router-dom';
function App() {
 return (
   <div className="page-container"> 
   <div className="content-warp"></div>
   <Navbar/> 
    <Routes> 
      <Route path='/' element ={<Auth/>} ></Route>
       < Route path='/Unite1' element={<Unite1/>} />
      < Route path='/Unite2' element={<Unite2/>} />
      < Route path='/Unite3' element={<Unite3/>} />
      < Route path='/Unite4' element={<Unite4/>} />
      < Route path='/Unite5' element={<Unite5/>} />
      < Route path='/Inscrit' element={<Inscrit/>} />
      < Route path='/Suivant'element={<Suivant/>} />
      < Route path='/Suivant1'element={<Suivant1/>} />
      < Route path='/Tks'element={<Tks/>} />
      < Route path='/RejetHydrique'element={<RejetHydrique/>} />
      < Route path='/Verification'element={<Verification/>} />
      </Routes>
      <Footer/>
   </div>
 )
}


export default App;




































/*
import Home from './hookes/Home';
import Footer from './hookes/Footer';

import Navbar from './hookes/Navbar';
import Concter from './hookes/Concter';
import Uniter1 from './hookes/Uniter1';



  import { Routes,Route } from 'react-router-dom'
 function App() {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path="/" exact   element={<Home/>} />
      <Route path="/Concter" element={<Concter/>} />
      
      <Route path="/uniter1" element={<Uniter1/>} />
         </Routes>
    <Footer/>
    </div>
  )
}
export default App;*/
