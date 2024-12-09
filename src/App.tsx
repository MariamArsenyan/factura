import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './page/home/HomePage';
import { WelcomePage } from './page/welcome/WelcomePage';


export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/' element={<WelcomePage/>}/>
    </Routes>
  </BrowserRouter>
)
  

