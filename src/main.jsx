import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Routes,Route } from "react-router";
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './Pages/SmoothScrolling.jsx';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <SmoothScrolling >
    
      <App />
       </SmoothScrolling>
    
  </BrowserRouter>,
 
)
