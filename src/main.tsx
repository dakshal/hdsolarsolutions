import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Make sure this is imported

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Add the basename prop here */}
    <BrowserRouter basename="/hdsolarsolutions/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );