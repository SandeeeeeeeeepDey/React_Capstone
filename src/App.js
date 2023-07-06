// import './App.css';
// import { BrowserRouter , Routes, Route} from 'react-router-dom';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
    
//       <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<HomePage />} ></Route>
//         </Routes>
        
      
//       </BrowserRouter>
    
    
//   );
// }

// export default App;
import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </>
  );
}

export default App;
