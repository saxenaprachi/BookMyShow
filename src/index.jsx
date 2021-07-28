import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import MovieContextProvider, { MovieContext } from './context/movie.context';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieContextProvider>
    <App />
    </MovieContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

