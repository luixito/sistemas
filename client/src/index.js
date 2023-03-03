import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./pages/login.js";
import Menu from './pages/Menu.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

