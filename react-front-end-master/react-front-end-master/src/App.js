import React from 'react';
import AngleComponent from './components/AngleComponent';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAngelComponent from './components/CreateAngelComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // install rect-router-dom

function App() {
  return (
    <div className='container'>
       <div><HeaderComponent /></div>
       <div>

        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element={<LoginComponent/>} /> 
            <Route exact path = '/angel' element={<AngleComponent/>}/> 
            <Route path = "/add-angel" element={<CreateAngelComponent />} />
          </Routes>
      </BrowserRouter>
      
      </div>
      <div><FooterComponent /></div>
    </div>
  );
  }
  export default App;
